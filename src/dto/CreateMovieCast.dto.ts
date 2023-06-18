import { IsNumber } from '@nestjs/class-validator';
export class CreateMovieCastDto {
  @IsNumber()
  movieId: number;

  @IsNumber()
  castId: number;
}
