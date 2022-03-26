import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
	name: 'users'
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

	@Column({type: String})
	username: string;

	@Column({type: String})
	email: string;

	@Column({type: String})
	phone: string;

	@Column({type: Date})
	posted: Date;
}
