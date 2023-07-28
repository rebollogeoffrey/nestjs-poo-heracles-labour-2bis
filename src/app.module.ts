// import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { FightersModule } from './fighters/fighters.module';
import { WeaponsModule } from './weapons/weapons.module';
import { ShieldsModule } from './shields/shields.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => databaseConfig,
    }),
    FightersModule,
    WeaponsModule,
    ShieldsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
