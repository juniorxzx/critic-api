import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { ProductEntity } from './product.entity';

@Entity('product_image')
export class ProductImageEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: 'url', length: 100, nullable: false })
    url: string

    @Column({ name: 'description', length: 100, nullable: false })
    description: string

    @ManyToOne(() => ProductEntity, (productEntity) => productEntity.image,
        { orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    product: ProductEntity;
}