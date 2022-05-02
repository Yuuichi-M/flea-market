import { Injectable } from '@nestjs/common';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
  //privateで配列でitems変数を作成(初期値は空)
  private items: Item[] = [];

  //Itemを配列に格納 戻り地をItemに設定
  findAll(): Item[] {
    return this.items;
  }

  //createメソッドを定義
  create(item: Item): Item {
    //Controllerから受け取ったitemを配列に格納
    this.items.push(item);
    //格納したItemを返す
    return item;
  }
}
