import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviecastController } from 'src/controller/movieCast/moviecast.controller';
import { MoviecastService } from 'src/service/movieCast/moviecast.service';
import { Movie } from './movie';
import { Cast } from './cast';

@Module({
  imports: [TypeOrmModule.forFeature([Movie, Cast])],
  controllers: [MoviecastController],
  providers: [MoviecastService],
})
export class MoviecastModule {}
