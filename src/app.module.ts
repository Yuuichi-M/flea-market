import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm'; //typeOrmModuleをインポート

@Module({
  imports: [
    ItemsModule,
    //TypeOrmの環境設定
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      autoLoadEntities: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
