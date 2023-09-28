import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";


@Injectable()
@ValidatorConstraint({ async: true })
export class EmailValidator implements ValidatorConstraintInterface {

    constructor(private userRepository: UserRepository) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const userEmail = await this.userRepository.emailVal(value)
        return !userEmail
    }
}

export const EmailUnique = (options: ValidationOptions) =>{
    return (object: Object, property: string) =>{
        registerDecorator({
            target: object.constructor,
            propertyName: property,
            options: options,
            constraints: [],
            validator: EmailValidator
        })
    }
}