import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './model/movie/movie';
import { Cast } from './model/cast/cast';
import { MovieModule } from './model/movie/movie.module';
import { CastModule } from './model/cast/cast.module';
import { MoviecastModule } from './model/movieCast/moviecast.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test_campiagn',
      entities: [Movie, Cast],
      synchronize: true,
    }),
    MovieModule,
    CastModule,
    MoviecastModule,
  ],
})
export class AppModule {}
