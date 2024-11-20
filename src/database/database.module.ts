import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedsModule } from './seeds/seeds.module';
import databaseConfig from './config/database.config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync(databaseConfig.asProvider()),
        SeedsModule
    ]
})
export class DatabaseModule { }