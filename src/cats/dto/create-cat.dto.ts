import { IsString, IsNumber, IsOptional, IsMongoId } from 'class-validator';


export class CreateCatDto {
  @IsMongoId()
  @IsOptional()
  user_id: string | null;

  @IsString()
  name: string;

  @IsNumber()
  @IsOptional()
  age: number | null;

  @IsString()
  @IsOptional()
  breed: string | null
}
