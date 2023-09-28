import { IsEmail, MinLength, IsNotEmpty, IsOptional } from "class-validator"
import { EmailUnique } from "../validator/email.validator"

export class UpdateUserDto {

    @IsNotEmpty({
        message: "O campo nome não pode ser vazio"
    })
    @IsOptional()
    name: string

    @IsEmail(undefined, { message: "O email informado é inválido!" })
    @EmailUnique({ message: "Email já cadastrado" })
    @IsOptional()
    email: string

    @MinLength(6, { message: "A senha deve possuir pelo menos 6 digitos" })
    @IsOptional()
    password: string
}