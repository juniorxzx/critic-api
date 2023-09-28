import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { CharacteristicProductDTO, ImageProductDTO } from './createProduct.dto';


export class UpdateProductDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;


  @IsString()
  @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
  @IsOptional()
  category: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => CharacteristicProductDTO)
  @IsOptional()
  characteristic: CharacteristicProductDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ImageProductDTO)
  @IsOptional()
  image: ImageProductDTO[];
}