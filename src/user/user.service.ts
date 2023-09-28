import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { ListUserDto } from './dto/listUser.dto'
import { UserEntity } from './user.entity'
import { Repository } from 'typeorm'
import { UpdateUserDto } from './dto/updateUser.dto'


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { }

    async getUser() {
        const usersSaved = await this.userRepository.find()
        const listUser = usersSaved.map(
            (user) => new ListUserDto(user.id, user.name)

        )

        return listUser
    }
    async createUser(userEntity: UserEntity) {
        await this.userRepository.save(userEntity)
    }

    async deleteUser(id: string) {
        this.userRepository.delete(id)
    }

    async updateUser(id: string, userEntity: UpdateUserDto) {
        this.userRepository.update(id, userEntity)
    }

}