import { IsString, IsEmail, MinLength, IsNotEmpty } from "class-validator"
import { EmailUnique } from "../validator/email.validator"

export class CreateUserDto {

    @IsNotEmpty({
        message: "O campo nome não pode ser vazio"
    })
    name: string

    @IsEmail(undefined, { message: "O email informado é inválido!" })
    @EmailUnique({ message: "Email já cadastrado" })
    email: string

    @MinLength(6, { message: "A senha deve possuir pelo menos 6 digitos" })
    password: string
}