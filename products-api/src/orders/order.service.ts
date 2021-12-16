import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/product.entity';
import { Repository, In } from 'typeorm';
import { OrderCreateDto, OrderDto } from './dto';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) { }

  findAll(): Promise<Order[]> {
    return this.ordersRepository.find({
      relations: ['products'],
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
    return this.ordersRepository.save({
      customer,
      value: prices.length ? prices.reduce((p1, p2) => p1 + p2) : 0,
      products: foundProducts,
    });
  }

  update(id: number, order: OrderDto): Promise<Order> {
    return this.ordersRepository.save({ id, ...order });
  }

  findOne(id: string): Promise<Order> {
    return this.ordersRepository.findOne(id, {
      relations: ['products'],
    });
  }

  async remove(id: string): Promise<void> {
    await this.ordersRepository.delete(id);
  }
}
