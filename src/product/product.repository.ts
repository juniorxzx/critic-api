import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [];

  getAll() {
    return this.products;
  }

  save(dataProducts: ProductEntity) {
    this.products.push(dataProducts);
    return dataProducts;
  }

  private searchForId(id: string) {
    const product = this.products.find((prod) => prod.id === id);

    if (!product) {
      throw new Error('Produto não existe');
    }

    return product;
  }

  async update(id: string, dataProduct: Partial<ProductEntity>) {
    const dataNotUpdate = ['id', 'usuarioId'];
    const product = this.searchForId(id);
    Object.entries(dataProduct).forEach(([key, value]) => {
      if (dataNotUpdate.includes(key)) {
        return;
      }
      product[key] = value;
    });

    return product;
  }

  async remove(id: string) {
    const removedProduct = this.searchForId(id);
    this.products = this.products.filter((product) => product.id !== id);
    return removedProduct;
  }
}