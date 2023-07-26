import { Controller } from '@nestjs/common';
// import { ShieldsService } from './shields.service';

@Controller('shields')
export class ShieldsController {
  name: string;
  protection = 10;

  constructor(name: string, protection?: number) {
    this.name = name;
    if (protection !== undefined) {
      this.protection = protection;
    }
  }
}
