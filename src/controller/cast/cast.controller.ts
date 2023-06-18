import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { CreateCastDto } from 'src/dto/CreateCast.dto';
import { UpdateCastDto } from 'src/dto/UpdateCast.dto';
import { CastService } from 'src/service/cast/cast.service';

@Controller('cast')
export class CastController {
  constructor(private castService: CastService) {}

  @Get()
  async getCast() {
    try {
      return await this.castService.fetchCast();
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `${error}`,
      };
    }
  }

  @Get('language/:id')
  async getLanguage(@Param('id', ParseIntPipe) id: string) {
    try {
      return await this.castService.fetchDataLanguageById(id);
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `${error}`,
      };
    }
  }

  @Get(':id')
  async getCastById(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.castService.fetchCastById(id);
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `${error}`,
      };
    }
  }

  @Post()
  async createCast(@Body() createCastDto: CreateCastDto) {
    try {
      return await this.castService.createCast(createCastDto);
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `${error}`,
      };
    }
  }

  @Put(':id')
  async updateCast(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCastDto: UpdateCastDto,
  ) {
    try {
      return await this.castService.updateCast(id, updateCastDto);
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `${error}`,
      };
    }
  }

  @Delete(':id')
  async deleteCast(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.castService.deleteCast(id);
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `${error}`,
      };
    }
  }
}
