import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { FightersController } from './fighters/fighters.controller';
import { ShieldsController } from './shields/shields.controller';
import { WeaponsController } from './weapons/weapons.controller';

@Controller('fight')
export class AppController {
  fighter: FightersController;
  constructor(
    private readonly appService: AppService,
    fighter: FightersController,
  ) {
    this.fighter = fighter;
  }
  // test = this.fighter('\u{1F938} Heracles', 20, 6);

  // FIGHTERS
  // readonly Pebble = this.fighter.name(
  //   '\u{1FAA8}  Petit caillou, The True French Pebble',
  // );

  // let Human=  new FightersController(
  //   'Human',
  //   10,
  //   10,
  //   )

  // let monster= this.fighter("lion", 10, 10);
  // let human= new FightersController("lion", 10, 10);

  // @Get()
  // getBattle() {

  //   return human.fight(monster);
  // }
}

/*
  Human: Fighter = new Fighter('\u{1F938} Heracles', 20, 6);
  Lion: Fighter = new Fighter('\u{1F981} Nemean Lion', 11, 13);
  Sanglier: Fighter = new Fighter('🐗 Boar of Erymanthe', 20, 25);
  */
