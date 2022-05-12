import { ItemStatus } from "src/items/item-status.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//このEntityを利用してデータベースにテーブルを作成する準備
//entityとして動作させる
@Entity()
export class Item {
  //自動採番カラムとして表す
  @PrimaryGeneratedColumn('uuid')
  id: string;

  //通常のカラム
  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  status: ItemStatus;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
