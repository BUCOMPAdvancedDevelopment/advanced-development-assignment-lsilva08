import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrderCreateDto, OrderDto } from './dto';
import { Order } from './order.entity';
import { OrderService } from './order.service';

@Controller('/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Get()
  findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Post()
  create(@Body() order: OrderCreateDto): Promise<Order> {
    return this.orderService.create(order);
  }

  @Get('/:id')
  findOne(@Param() id: string): Promise<Order> {
    return this.orderService.findOne(id);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() order: OrderDto): Promise<Order> {
    return this.orderService.update(Number(id), order);
  }

  @Delete('/:id')
  remove(@Param() id: string): Promise<void> {
    return this.orderService.remove(id);
  }
}
