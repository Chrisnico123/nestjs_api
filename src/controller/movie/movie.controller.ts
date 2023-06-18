import {
  Body,
  Controller,
  Get,
  Post,
  ParseIntPipe,
  Param,
  Put,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { UpdateMovieDto } from 'src/dto/UpdateMovie.dto';
import { CreateMovieDto } from 'src/dto/CreateMovie.dto';
import { MovieService } from 'src/service/movie/movie.service';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  async getMovie() {
    try {
      return await this.movieService.fetchMovie();
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `${error}`,
      };
    }
  }

  @Post()
  async createMovie(@Body() createMovieDto: CreateMovieDto) {
    try {
      return await this.movieService.createMovie(createMovieDto);
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `${error}`,
      };
    }
  }

  @Get(':id')
  async getMovieById(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.movieService.fetchMovieById(id);
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `${error}`,
      };
    }
  }

  @Put(':id')
  async updateMovie(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    try {
      return await this.movieService.updateMovie(id, updateMovieDto);
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `${error}`,
      };
    }
  }

  @Delete(':id')
  async deleteMovie(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.movieService.deleteMovie(id);
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `${error}`,
      };
    }
  }
}
