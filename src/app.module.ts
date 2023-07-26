import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FightersModule } from './fighters/fighters.module';
import { WeaponsModule } from './weapons/weapons.module';
import { ShieldsModule } from './shields/shields.module';

@Module({
  imports: [FightersModule, WeaponsModule, ShieldsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
