import { Type } from 'class-transformer';
import {
    ArrayMinSize,
    IsArray,
    IsNotEmpty,
    IsNumber,
    IsString,
    IsUrl,
    IsUUID,
    MaxLength,
    Min,
    ValidateNested,
} from 'class-validator';
import { ProductEntity } from '../product.entity';

export class CharacteristicProductDTO {

    id: string;

    @IsString()
    @IsNotEmpty({ message: 'Nome da cadasterística não pode ser vazio' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'Descrição da característica não pode ser vazio' })
    description: string;

    product: ProductEntity;
}

export class ImageProductDTO {
    id: string

    @IsUrl({})
    url: string;

    @IsString()
    @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
    description: string;

    product: ProductEntity;
}

export class CreateProductDTO {
    @IsString()
    @IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'Descrição do produto não pode ser vazia ' })
    @MaxLength(1000, {
        message: 'Descrição não pode ter mais que 1000 caracteres',
    })
    description: string;


    @IsString()
    @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
    category: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3)
    @Type(() => CharacteristicProductDTO)
    characteristic: CharacteristicProductDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ImageProductDTO)
    image: ImageProductDTO[];
}