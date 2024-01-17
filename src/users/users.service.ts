import { Injectable } from '@nestjs/common';
import { UserDTO, dbUsers } from './dtos/create-user-dto';

@Injectable()
export class UsersService {
  private readonly users: UserDTO[] = dbUsers;

  getUsers = () => this.users;

  getUsersById = async (id: string) => {
    const _id = parseInt(id);
    try {
      const result: UserDTO | string = await new Promise((resolve) => {
        const user = this.users.find((_, index) => index === _id);
        setTimeout(() => {
          if (user) {
            resolve(user);
          } else {
            resolve(`User ${id} not found`);
          }
        }, 2500);
      });

      return result;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  create(user: UserDTO): UserDTO {
    try {
      const { name, email } = user;

      if (name && email) {
        const newUser = new UserDTO(name, email);
        this.users.push(newUser);
        return newUser;
      }
    } catch (error) {
      console.error(error.message);
    }
  }
}
