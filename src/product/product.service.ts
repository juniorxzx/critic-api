import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { Repository } from "typeorm";
import { ListProductDto } from "./dto/listProduct.dto";
import { UpdateProductDto } from "./dto/updateProduct.dto";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>
    ) { }

    async createProduct(productEntity: ProductEntity) {
        await this.productRepository.save(productEntity)
    }

    async getAllProducts() {
        const products = await this.productRepository.find()
        const allProducts = products.map(
            (product) => new ListProductDto(product.id, product.name, product.description, product.category, product.characteristic, product.image)
        )
        return allProducts
    }

    async deleteProduct(id: string) {
        await this.productRepository.delete(id)
    }

    async updateProduct(id: string, updateProductDto: UpdateProductDto) {
        await this.productRepository.update(id, updateProductDto)
    }


}