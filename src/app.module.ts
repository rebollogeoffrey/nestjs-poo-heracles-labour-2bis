import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FightersModule } from './fighters/fighters.module';
import { WeaponsModule } from './weapons/weapons.module';

@Module({
  imports: [FightersModule, WeaponsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
