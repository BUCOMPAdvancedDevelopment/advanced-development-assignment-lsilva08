import { Product } from '../../products/product.entity';

export type OrderCreateDto = {
  customer: number;
  products: [{ id: number; quantity: number }];
};

export type OrderDto = {
  id?: number;
  customer: number;
  products: Product[];
  value: number;
  trackingCode: string;
};

export type Tracking = {
  address: string;
  latitude: number;
  longitude: number[];
};
