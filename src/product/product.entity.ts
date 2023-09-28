import { Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { ProductCharacteristicEntity } from './characteristic.entity'
import { ProductImageEntity } from './image.entity'



@Entity({ name: 'products' })
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({ name: 'name', length: 100, nullable: false })
    name: string
    @Column({ name: 'category', length: 100, nullable: false })
    category: string
    @Column({ name: 'description', length: 255, nullable: false })
    description: string

    @OneToMany(() => ProductCharacteristicEntity, (productCharacteristicEntity) =>
        productCharacteristicEntity.product, { cascade: true, eager: true })
    characteristic: ProductCharacteristicEntity[];

    @OneToMany(() => ProductImageEntity, (productImageEntity) =>
        productImageEntity.product, { cascade: true, eager: true })
    image: ProductImageEntity[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string
}