import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cast } from 'src/model/cast';
import { Repository } from 'typeorm';
import { CreateCastDto } from 'src/dto/CreateCast.dto';
import { UpdateCastDto } from 'src/dto/UpdateCast.dto';

@Injectable()
export class CastService {
  constructor(
    @InjectRepository(Cast) private castRepository: Repository<Cast>,
  ) {}

  async fetchCast() {
    const data = await this.castRepository.find();
    return {
      statusCode: HttpStatus.OK,
      status: 'success',
      message: 'Success Get Data',
      data: data,
    };
  }

  async fetchCastById(id: number) {
    const cast = await this.castRepository.findOneBy({ id });

    if (!cast) {
      throw new HttpException('Cast not found', HttpStatus.BAD_REQUEST);
    }

    const data = await this.castRepository.findBy({ id });
    return {
      statusCode: HttpStatus.OK,
      status: 'success',
      message: 'Success Get Data',
      data: data,
    };
  }

  async createCast(createCastDto: CreateCastDto) {
    const newCast = this.castRepository.create({ ...createCastDto });
    await this.castRepository.save(newCast);
    return {
      statusCode: HttpStatus.CREATED,
      status: 'success',
      message: 'Success Create Data',
    };
  }

  async updateCast(id: number, updateCastDto: UpdateCastDto) {
    const cast = await this.castRepository.findOneBy({ id });

    if (!cast) {
      throw new HttpException('Cast not found', HttpStatus.BAD_REQUEST);
    }

    await this.castRepository.update({ id }, { ...updateCastDto });

    return {
      statusCode: HttpStatus.OK,
      status: 'success',
      message: 'Success Update Data',
    };
  }

  async deleteCast(id: number) {
    const cast = await this.castRepository.findOneBy({ id });

    if (!cast) {
      throw new HttpException('Cast not found', HttpStatus.BAD_REQUEST);
    }

    await this.castRepository.delete({ id });
    return {
      statusCode: HttpStatus.OK,
      status: 'success',
      message: 'Success Delete Data',
    };
  }
}
