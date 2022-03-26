import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) {}

  async create(createUserDto: CreateUserDto): Promise<string> {
    const user = this.userRepository.create({
      ...createUserDto,
      posted: new Date()
    });
    await this.userRepository.save(user);
    return `User successfully saved to DB!`;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        id
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
