import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemStatus } from './item-status.enum';
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

  //createメソッドを定義
  @Post()
  //戻り値の型はItem リクエストBody
  create(
    @Body('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
  ): Item {
    //itemオブジェクトを作成
    const item: Item = {
      id,
      name,
      price,
      description,
      status: ItemStatus.ON_SALE,
    };

    //ServiceクラスのCreateメソッドを呼び出す
    //itemオブジェクトをServiceクラスのcreateメソッドに渡す
    return this.itemsService.create(item);
  }
}
