import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMovieCastDto } from 'src/dto/CreateMovieCast.dto';
import { MoviecastService } from 'src/service/movieCast/moviecast.service';

@Controller('moviecast')
export class MoviecastController {
  constructor(private readonly movieCastService: MoviecastService) {}

  @Post()
  async createMovieCast(@Body() createMovieCastDto: CreateMovieCastDto) {
    return this.movieCastService.createMovieCast(createMovieCastDto);
  }

  @Get()
  async getMovieCast() {
    return this.movieCastService.fetchMovieCast();
  }
}
