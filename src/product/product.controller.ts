import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ProductRepository } from './product.repository';
import { CreateProductDTO } from './dto/createProduct.dto';
import { ProductEntity } from './product.entity';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { ProductService } from './product.service';
import { ListProductDto } from './dto/listProduct.dto';


@Controller('products')
export class ProductController {
  constructor(private readonly productRepository: ProductRepository,
    private readonly productService: ProductService
  ) { }

  @Post()
  async create(@Body() dataProduct: CreateProductDTO) {
    const product = new ProductEntity();

    product.id = randomUUID();
    product.name = dataProduct.name;
    product.description = dataProduct.description;
    product.category = dataProduct.category;
    product.image = dataProduct.image;
    product.characteristic = dataProduct.characteristic;

    const productCreated= this.productService.createProduct(product);
    return productCreated
  }

  @Get()
  async getAll() {
    return this.productService.getAllProducts();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() dadosProduto: UpdateProductDto,
  ) {
    const product = await this.productService.updateProduct(
      id,
      dadosProduto,
    );

    return {
      mensagem: 'produto atualizado com sucesso',
      produto: product,
    };
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const deletedProduct = await this.productService.deleteProduct(id);

    return {
      mensagem: 'produto removido com sucesso',
      produto: deletedProduct,
    };
  }
}