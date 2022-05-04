import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from "class-validator";

export class CreateItemDto {
  //class validatorでバリデーションルール定義
  @IsString()  //文字列
  @IsNotEmpty()  //1文字以上
  @MaxLength(40)  //40文字以内
  name: string;

  @IsInt() //数値
  @Min(1)  //1文字以上
  @Type(() => Number)  //プロパティをNumber型
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}
