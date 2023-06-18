import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './model/movie';
import { Cast } from './model/cast';
import { MovieModule } from './model/movie.module';
import { CastModule } from './model/cast.module';
import { MoviecastModule } from './model/moviecast.module';

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
