import { Module } from '@nestjs/common';

import { UserModule } from 'src/user/user.module';
import { ProductRepository } from './product.repository';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [ProductRepository, ProductService],
})
export class ProductModule {}