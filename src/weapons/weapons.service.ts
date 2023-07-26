import { Injectable } from '@nestjs/common';

@Injectable()
export class WeaponsService {
  findAll() {
    return `This action returns all weapons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} weaopon`;
  }

  update(id: number) {
    return `This action updates a #${id} weaopon`;
  }

  remove(id: number) {
    return `This action removes a #${id} weaopon`;
  }
}
