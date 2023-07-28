import { Controller, Get, Patch, Param, Delete } from '@nestjs/common';
import { ShieldsService } from './shields.service';
@Controller('shields')
export class ShieldsController {
  name: string;
  protection: number;

  constructor(name: string, protection?: number) {
    this.name = name;
    if (protection !== undefined) {
      this.protection = protection;
    } else this.protection = 10;
  }
}
