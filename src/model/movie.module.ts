import { Module } from '@nestjs/common';
import { MovieController } from '../controller/movie/movie.controller';
import { MovieService } from '../service/movie/movie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from 'src/model/movie';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
