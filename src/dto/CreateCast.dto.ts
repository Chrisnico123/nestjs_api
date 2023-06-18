import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsDateString,
  IsOptional,
} from '@nestjs/class-validator';
export class CreateCastDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDateString()
  birthday: Date;

  @IsDateString()
  @IsOptional()
  deadday: Date;

  @IsInt()
  @IsNotEmpty()
  rating: number;
}
