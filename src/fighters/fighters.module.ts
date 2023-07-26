import { Module } from '@nestjs/common';
import { FightersService } from './fighters.service';
import { FightersController } from './fighters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FighterEntity } from './fighter.entity/fighter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FighterEntity])],
  providers: [FightersService],
  controllers: [FightersController],
})
export class FightersModule {}
