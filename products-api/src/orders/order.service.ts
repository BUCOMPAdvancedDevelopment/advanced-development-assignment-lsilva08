import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/product.entity';
import { Repository, In } from 'typeorm';
import { OrderCreateDto, OrderDto, Tracking } from './dto';
import { OrderItem } from './item/order-item.entity';
import { Order } from './order.entity';
import { Datastore } from '@google-cloud/datastore';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OrderService {
  datastore: Datastore;

  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,
    private configService: ConfigService,
  ) {
    this.datastore = new Datastore({
      projectId: this.configService.get<string>('google.project'),
      keyFilename: './src/config/ad-assignment-2021-334714-0972f79ff8e8.json',
    });
  }

  findAll(): Promise<Order[]> {
    return this.ordersRepository.find({
      relations: ['items', 'items.product'],
    });
  }

  async create(order: OrderCreateDto): Promise<Order> {
    const { customer, products } = order;

    const productsIds = products.map(({ id }) => id);
    const foundProducts: Product[] = await this.productsRepository.find({
      where: { id: In([...productsIds]) },
    });

    const prices = foundProducts.map(
      (product) =>
        product.price * products.find((p) => p.id === product.id).quantity,
    );

    const items = foundProducts.map((foundProduct) => ({
      product: foundProduct,
      quantity: products.find((p) => p.id === foundProduct.id).quantity,
      order: null,
    }));

    const savedOrder = await this.ordersRepository.save({
      customer,
      value: prices.length ? prices.reduce((p1, p2) => p1 + p2) : 0,
    });

    await Promise.all(
      items.map((item) => {
        item.order = savedOrder;
        return this.orderItemRepository.save(item);
      }),
    );

    const trackingKey = this.datastore.key(['Tracking', savedOrder.id]);
    console.log('key:', trackingKey);

    const tracking = {
      key: trackingKey,
      data: {
        positions: [{ address: 'test', latitude: 1, longitude: 2 }],
      },
    };
    await this.datastore.save(tracking);

    await this.ordersRepository.save({
      ...savedOrder,
      trackingCode: trackingKey.id,
    });

    return this.ordersRepository.findOne(savedOrder.id, {
      relations: ['items', 'items.product'],
    });
  }

  update(id: number, order: OrderDto): Promise<Order> {
    return this.ordersRepository.save({ id, ...order });
  }

  findOne(id: string): Promise<Order> {
    return this.ordersRepository.findOne(id, {
      relations: ['items', 'items.product'],
    });
  }

  async remove(id: string): Promise<void> {
    await this.ordersRepository.delete(id);
  }

  async orderTracking(id: string): Promise<any> {
    const trackingKey = this.datastore.key(['Tracking', Number(id)]);
    const tracking = await this.datastore.get(trackingKey);
    return {
      id,
      positions: tracking[0]?.positions,
    };
  }

  async upsertOrderTracking(id: string, tracking: Tracking): Promise<any> {
    const { address, latitude, longitude } = tracking;
    const trackingKey = this.datastore.key(['Tracking', Number(id)]);
    const foundTracking = await this.datastore.get(trackingKey);

    const newTracking = {
      key: trackingKey,
      data: {
        positions: [
          ...foundTracking[0]?.positions,
          { address, latitude, longitude },
        ],
      },
    };
    await this.datastore.save(newTracking);

    return {
      id,
      tracking: newTracking.data.positions,
    };
  }
}
