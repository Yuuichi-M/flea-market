import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm'; //typeOrmModuleをインポート

@Module({
  imports: [ItemsModule, TypeOrmModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule { }
