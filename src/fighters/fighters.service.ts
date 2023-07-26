import { Injectable } from '@nestjs/common';

@Injectable()
export class FightersService {
  findAll() {
    return `This action returns all fighter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fighter`;
  }

  update(id: number) {
    return `This action updates a #${id} fighter`;
  }

  remove(id: number) {
    return `This action removes a #${id} fighter`;
  }
}
