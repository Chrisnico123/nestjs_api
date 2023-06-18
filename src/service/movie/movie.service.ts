import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'src/model/movie/movie';
import { Repository } from 'typeorm';
import { CreateMovieDto } from 'src/dto/CreateMovie.dto';
import { UpdateMovieDto } from 'src/dto/UpdateMovie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
  ) {}

  async fetchMovie() {
    return await this.movieRepository.find();
  }

  async fetchMovieById(id: number) {
    const cast = await this.movieRepository.findOneBy({ id });

    if (!cast) {
      throw new HttpException('Cast not found', HttpStatus.BAD_REQUEST);
    }
    const data = await this.movieRepository.findBy({ id });

    return {
      statusCode: HttpStatus.OK,
      status: 'Success',
      message: 'Success Get Data',
      data: data,
    };
  }

  async createMovie(createMovieDetail: CreateMovieDto) {
    const newMovie = this.movieRepository.create({ ...createMovieDetail });
    await this.movieRepository.save(newMovie);

    return {
      statusCode: HttpStatus.OK,
      status: 'Success',
      message: 'Success Create Data',
    };
  }

  async deleteMovie(id: number) {
    const cast = await this.movieRepository.findOneBy({ id });

    if (!cast) {
      throw new HttpException('Cast not found', HttpStatus.BAD_REQUEST);
    }
    await this.movieRepository.delete({ id });

    return {
      statusCode: HttpStatus.OK,
      status: 'Success',
      message: 'Success Delete Data',
    };
  }

  async updateMovie(id: number, movieUpdateParams: UpdateMovieDto) {
    const cast = await this.movieRepository.findOneBy({ id });

    if (!cast) {
      throw new HttpException('Cast not found', HttpStatus.BAD_REQUEST);
    }
    await this.movieRepository.update({ id }, { ...movieUpdateParams });

    return {
      statusCode: HttpStatus.OK,
      status: 'Success',
      message: 'Success Update Data',
    };
  }
}
