import { Injectable } from '@nestjs/common';

@Injectable()
export class ShieldsService {
  findAll() {
    return `This action returns all shields`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shield`;
  }

  update(id: number) {
    return `This action updates a #${id} shield`;
  }

  remove(id: number) {
    return `This action removes a #${id} shield`;
  }
}
