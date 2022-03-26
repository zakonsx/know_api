import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
