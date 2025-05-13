import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsOptional()
    name: string | null;

    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsNumber()
    @IsOptional()
    age: number | null;
}
