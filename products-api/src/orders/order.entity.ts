import { Product } from 'src/products/product.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { OrderItem } from './item/order-item.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer: number;

  @Column({ nullable: true })
  trackingCode: string;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  items: OrderItem[];
}
