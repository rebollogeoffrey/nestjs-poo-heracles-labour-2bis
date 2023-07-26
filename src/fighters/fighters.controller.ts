import { ShieldsController } from 'src/shields/shields.controller';
import { WeaponsController } from './../weapons/weapons.controller';
import { Controller } from '@nestjs/common';
const MAX_LIFE = 100;

@Controller('fighters')
export class FightersController {
  name: string;
  strength: number;
  dexterity: number;
  life: number;
  weapon: null | WeaponsController;
  shield: null | ShieldsController;
  // isHardMode: boolean;

  constructor(name: string, strength: number, dexterity: number) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.weapon = null;
    this.shield = null;
    // this.isHardMode = false;
  }
  fight(defender: FightersController) {
    const previousLife: number = defender.life;

    const attack = this.getDamage();
    const randomAttack = Math.floor(Math.random() * attack);
    let attackValue = randomAttack - defender.getDefense();
    if (attackValue <= 0) {
      attackValue = 1;
    }

    defender.life = defender.life - attackValue;
    if (defender.life <= 0) {
      defender.life = 0;
    }

    console.log(
      this.name,
      '🗡️  attacks \u{1F6E1} ',
      defender.name,
      '(',
      previousLife,
      '->',
      defender.life,
      '💙)',
    );

    return defender.life;
  }

  getDamage() {
    if (this.weapon !== null) {
      return this.strength + this.weapon.damage;
    } else {
      return this.strength;
    }
  }

  getDefense() {
    if (this.shield !== null) {
      return this.dexterity; // + this.shield.protection;
    } else {
      return this.dexterity;
    }
  }

  isAlive() {
    if (this.life) {
      return true;
    } else {
      return false;
    }
  }

  //   switchIsHardMode() {
  //     this.isHardMode = !this.isHardMode;
  //   }

  setWeapon(weapon: WeaponsController) {
    this.weapon = weapon;
    //this.isHardMode ? (this.shield = null) : (this.shield = this.shield);
  }

  setShield(shield: ShieldsController) {
    this.shield = shield;
    //this.isHardMode ? (this.weapon = null) : (this.weapon = this.weapon);
  }

  setStrengthValue(strength: number) {
    this.strength = strength;
  }
}
