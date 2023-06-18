import { Test, TestingModule } from '@nestjs/testing';
import { MoviecastController } from './moviecast.controller';

describe('MoviecastController', () => {
  let controller: MoviecastController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviecastController],
    }).compile();

    controller = module.get<MoviecastController>(MoviecastController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
