import { Injectable, NotFoundException } from '@nestjs/common';
import { threadId } from 'worker_threads';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemStatus } from './item-status.enum';
import { Item } from '../entities/item.entity';
import { ItemRepository } from './item.repository';

@Injectable()
export class ItemsService {
  constructor(private readonly itemRepository: ItemRepository) { }

  //privateで配列でitems変数を作成(初期値は空)
  private items: Item[] = [];

  //Itemを配列に格納
  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  //idで商品を検索する(findById)
  async findById(id: string): Promise<Item> {
    const found = await this.itemRepository.findOne(id);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  //createメソッドをDTOで定義
  async create(createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemRepository.createItem(createItemDto);
  }

  // //商品が売れた場合、ステータスを更新する
  // updateStatus(id: string): Item {
  //   //特定のIDを持つ商品を取得(findById)
  //   const item = this.findById(id);
  //   //ItemのステータスをSOLD.OUTに変更
  //   item.status = ItemStatus.SOLD_OUT;
  //   return item;
  // }

  //deleteメソッド定義
  //戻り値はvoid
  delete(id: string): void {
    //特定のid以外のitemを配列に残す
    this.items = this.items.filter((item) => item.id !== id);
  }
}
