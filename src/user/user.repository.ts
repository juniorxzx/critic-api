import { Body, Injectable } from "@nestjs/common"
import { UserEntity } from "./user.entity"


@Injectable()
export class UserRepository {
    private users: UserEntity[] = []


    async save(user: UserEntity) {
        this.users.push(user)

    }

    async get() {
        return this.users
    }

    async emailVal(email: string) {
        const users = this.users.find(
            user => user.email === email
        )
        return users != undefined
    }


    private searchForId(id: string) {
        const locateUser = this.users.find(
            userSaved => userSaved.id === id
        )

        if (!locateUser) {
            throw new Error("User not located")
        }
        return locateUser
    }

    async update(id: string, dataUpdate: Partial<UserEntity>) {

        const user = this.searchForId(id)
        Object.entries(dataUpdate).forEach(([key, value]) => {
            if (key === id) {
                return
            }
            user[key] = value
        })

        return user

    }

    async remove(id: string) {
        const user = this.searchForId(id)

        this.users = this.users.filter(
            userSaved => userSaved.id !== id
        )

        return user
    }

}