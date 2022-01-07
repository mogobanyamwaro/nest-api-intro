import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { createItemDto } from './dto/create-item-dto';
import { Item } from './interfaces/items.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsServive: ItemsService) {}
  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsServive.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsServive.findOne(id);
  }
  //   @Get(':id')
  //   findOne(@Param() param): string {
  //     return `Item ${param.id}`;
  //   }
  @Post()
  createItem(@Body() createitemdto: createItemDto): Promise<Item> {
    return this.itemsServive.create(createitemdto);
  }
  @Delete(':id')
  deleteItem(@Param('id') id): string {
    return `this is deleting ${id}`;
  }
  @Put(':id')
  updateItem(@Body() updateItemDTO: createItemDto, @Param('id') id): string {
    return `this is updating ${id} ${updateItemDTO.name}`;
  }
}
