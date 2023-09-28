import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { ProductEntity } from './product.entity'

@Entity('product_characteristics')
export class ProductCharacteristicEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', length: 100, nullable: false })
    name: string;

    @Column({ name: 'description', length: 255, nullable: false })
    description: string;


    @ManyToOne(() => ProductEntity, (productEntity) => productEntity.characteristic,
        { orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    product: ProductEntity;
}