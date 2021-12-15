import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductDto } from './dto';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post()
  create(@Body() product: ProductDto): Promise<Product> {
    return this.productService.create(product);
  }

  @Get('/:id')
  findOne(@Param() id: string): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Delete('/:id')
  remove(@Param() id: string): Promise<void> {
    return this.productService.remove(id);
  }
}
