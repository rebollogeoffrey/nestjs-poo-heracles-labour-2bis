import { Controller } from '@nestjs/common';

@Controller('weapons')
export class WeaponsController {
  name: string;
  damage: number;

  constructor(name: string, damage?: number) {
    this.name = name;
    if (damage !== undefined) {
      this.damage = damage;
    } else this.damage = 10;
  }
}
