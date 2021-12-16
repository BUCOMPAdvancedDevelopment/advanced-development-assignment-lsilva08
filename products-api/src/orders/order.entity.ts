import { Product } from 'src/products/product.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

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

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}
