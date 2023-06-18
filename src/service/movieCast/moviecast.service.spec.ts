import { Test, TestingModule } from '@nestjs/testing';
import { MoviecastService } from './moviecast.service';

describe('MoviecastService', () => {
  let service: MoviecastService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviecastService],
    }).compile();

    service = module.get<MoviecastService>(MoviecastService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
