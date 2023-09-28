import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from 'uuid'
import { ListUserDto } from "./dto/listUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { UserService } from "./user.service";
@Controller('/users')
export class UserController {


    constructor(
        private userRepository: UserRepository,
        private userService: UserService
        ) {

    }

    @Post()
    async createUser(@Body() dataUser: CreateUserDto) {
        const userEntity = new UserEntity()
        userEntity.email = dataUser.email
        userEntity.password = dataUser.password
        userEntity.name = dataUser.name
        userEntity.id = uuid();

        this.userService.createUser(userEntity)
        return {
            user: new ListUserDto(userEntity.id, userEntity.name),
            message: 'User created'
        }

    }

    @Get()
    async getUsers() {
        const usersSaved = await this.userService.getUser()
        return usersSaved
    }

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() dataUpdate: UpdateUserDto) {
        const newUser = await this.userService.updateUser(id, dataUpdate)

        return {
            user: newUser,
            message: "User updated"
        }
    }

    @Delete('/:id')
    async removeUser(@Param('id') id: string) {
        const userRemoved = await this.userService.deleteUser(id)

        return {
            user: userRemoved,
            message: "User removed with sucess"
        }
    }
}