import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
		type: String,
		description: 'The name of user',
		minLength: 2,
		example: 'John Doe'
	})
  username: string;

  @ApiProperty({
		type: String,
		example: 'test@email.com'
	})
  email: string;

	@ApiProperty({
		type: String,
		example: '+7 900 007 77 77'
	})
  phone: string;
}
