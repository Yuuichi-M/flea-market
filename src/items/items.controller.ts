import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './item.model';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  //サービスを利用可能にする(ItemsServiceクラスをインスタンス化し、変数に代入)
  constructor(private readonly itemsService: ItemsService) { }

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id') //コロン(:)を前につけることで可変のパラメーターとして定義できる
  //パラメーター取得の為@Paramデコレーターを使用
  //parseuuidパイプを渡す
  findById(@Param('id', ParseUUIDPipe) id: string): Item {
    //ServiceのメソッドにIDを渡す
    return this.itemsService.findById(id);
  }

  //create
  @Post()
  //DTOを変数で定義
  create(@Body() createItemDto: CreateItemDto): Item {
    //ServiceクラスのCreateメソッドを呼び出す
    //createItemDtoをServiceにわたす
    return this.itemsService.create(createItemDto);
  }
  //updateStatus
  @Patch(':id')
  updateStatus(@Param('id', ParseUUIDPipe) id: string): Item {
    return this.itemsService.updateStatus(id);
  }

  //delete
  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): void {
    //取得したidをServiceに渡す
    this.itemsService.delete(id);
  }
}
