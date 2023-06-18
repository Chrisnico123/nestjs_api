import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieCastDto } from 'src/dto/CreateMovieCast.dto';
import { Cast } from 'src/model/cast';
import { Movie } from 'src/model/movie';
import { Repository } from 'typeorm';

@Injectable()
export class MoviecastService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
    @InjectRepository(Cast) private castRepository: Repository<Cast>,
  ) {}

  async createMovieCast(createMovieCast: CreateMovieCastDto) {
    const { movieId, castId } = createMovieCast;

    const movie = await this.movieRepository.findOne({
      where: { id: movieId },
      relations: { cast: true },
    });

    if (!movie) {
      throw new HttpException('movie not found', HttpStatus.BAD_REQUEST);
    }

    const cast = await this.castRepository.findOneBy({ id: castId });
    if (!cast) {
      throw new HttpException('cast not found', HttpStatus.BAD_REQUEST);
    }

    movie.cast.push(cast);
    await this.movieRepository.save(movie);

    return {
      statusCode: HttpStatus.OK,
      status: 'success',
      message: 'Create Sucessful',
    };
  }

  async fetchMovieCast() {
    const data = await this.movieRepository.find({
      relations: {
        cast: true,
      },
    });

    return {
      statusCode: HttpStatus.OK,
      status: 'success',
      message: 'Get All Movie and Cast Success',
      data: data,
    };
  }
}
