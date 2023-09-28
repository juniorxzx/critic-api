import { ProductCharacteristicEntity } from "../characteristic.entity";
import { ProductImageEntity } from "../image.entity";


class ListCharacteristicDTO {
  name: string;
  description: string;
}

class ListImageDTO {
  url: string;
  description: string;
}
export class ListProductDto {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly description: string,
    readonly category: string,
    readonly characteristic: ListCharacteristicDTO[],
    readonly image: ListImageDTO[],
  ) { }

}