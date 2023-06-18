import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './CreateMovie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
