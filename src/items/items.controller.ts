import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Get(':id') //コロン(:)を前につけることで可変のパラメーターとして定義できる
  //パラメーター取得の為@Paramデコレーターを使用
  findById(@Param('id') id: string): Item {
    //ServiceのメソッドにIDを渡す
    return this.itemsService.findById(id);
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
  //updateなのでpatchを利用
  @Patch(':id')
  updateStatus(@Param('id') id: string): Item {
    return this.itemsService.updateStatus(id);
  }

  //deleteメソッド
  @Delete(':id')
  delete(@Param('id') id: string): void {
    //取得したidをServiceに渡す
    this.itemsService.delete(id);
  }
}
