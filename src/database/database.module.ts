import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
			database: ':memory:',
			dropSchema: true,
      synchronize: true,
      logging: false,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    }),
  ]
})
export class DatabaseModule {}
