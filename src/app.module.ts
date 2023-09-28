import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConfigService } from './config/config.service';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';

@Module({
  imports: [UserModule, ProductModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
    , TypeOrmModule.forRootAsync({
      useClass: DBConfigService,
      inject: [DBConfigService]
    })],
})
export class AppModule { }
