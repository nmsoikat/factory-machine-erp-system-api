import { Module } from '@nestjs/common';
import { MachineService } from './machine.service';
import { MachineController } from './machine.controller';
import { Machine } from './entities/machine.entity';
import { MachineData } from 'features/machine-data/entities/machine-data.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaginationService } from 'common/services/pagination.service';

@Module({
    imports: [TypeOrmModule.forFeature([MachineData, Machine])],
    controllers: [MachineController],
    providers: [MachineService, PaginationService],
})
export class MachineModule { }
