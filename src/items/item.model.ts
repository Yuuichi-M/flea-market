//定義したenumをインポート
import { ItemStatus } from './item-status.enum';

//Itemインターフェースを定義
export interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
  status: ItemStatus; //enumをstatusの型として使用
}
