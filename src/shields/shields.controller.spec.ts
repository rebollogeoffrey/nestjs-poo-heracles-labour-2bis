import { Test, TestingModule } from '@nestjs/testing';
import { ShieldsController } from './shields.controller';
import { ShieldsService } from './shields.service';

describe('ShieldsController', () => {
  let controller: ShieldsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShieldsController],
      providers: [ShieldsService],
    }).compile();

    controller = module.get<ShieldsController>(ShieldsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
