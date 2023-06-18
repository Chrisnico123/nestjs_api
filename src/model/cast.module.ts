import { Module } from '@nestjs/common';
import { CastController } from '../controller/cast/cast.controller';
import { CastService } from '../service/cast/cast.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cast } from 'src/model/cast';

@Module({
  imports: [TypeOrmModule.forFeature([Cast])],
  controllers: [CastController],
  providers: [CastService],
})
export class CastModule {}
