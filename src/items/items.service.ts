import { Injectable } from '@nestjs/common';
import { threadId } from 'worker_threads';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemStatus } from './item-status.enum';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
  //privateで配列でitems変数を作成(初期値は空)
  private items: Item[] = [];

  //Itemを配列に格納 戻り地をItemに設定
  findAll(): Item[] {
    return this.items;
  }

  //idで商品を検索する(findById)
  findById(id: string): Item {
    //配列から特定のキーで中身を検索するためfindメソッドを使用
    //itemのidと、指定されたidが等しい場合、Itemがリターンされる
    return this.items.find((item) => item.id === id);
  }

  //createメソッドをDTOで定義
  create(createItemDto: CreateItemDto): Item {
    const item: Item = {
      ...createItemDto,
      status: ItemStatus.ON_SALE,
    }
    //Controllerから受けったitemを配列に格納
    this.items.push(item);
    //格納したItemを返す
    return item;
  }

  //商品が売れた場合、ステータスを更新する
  updateStatus(id: string): Item {
    //特定のIDを持つ商品を取得(findById)
    const item = this.findById(id);
    //ItemのステータスをSOLD.OUTに変更
    item.status = ItemStatus.SOLD_OUT;
    return item;
  }

  //deleteメソッド定義
  //戻り値はvoid
  delete(id: string): void {
    //特定のid以外のitemを配列に残す
    this.items = this.items.filter((item) => item.id !== id);
  }
}
