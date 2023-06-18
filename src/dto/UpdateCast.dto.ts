import { CreateCastDto } from './CreateCast.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCastDto extends PartialType(CreateCastDto) {}
