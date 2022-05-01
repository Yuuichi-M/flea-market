import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service'; //itemsServiceインポート

@Controller('items')
export class ItemsController {
  //サービスを利用可能にする(ItemsServiceクラスをインスタンス化し、変数に代入)
  constructor(private readonly itemsService: ItemsService) { }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }
}
