import { Module } from '@nestjs/common';
import { MachineDataService } from './machine-data.service';
import { MachineDataController } from './machine-data.controller';
import { MachineData } from './entities/machine-data.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Machine } from 'features/machine/entities/machine.entity';
import { User } from 'features/user/entities/user.entity';
import { PaginationService } from 'common/services/pagination.service';

@Module({
    imports: [TypeOrmModule.forFeature([MachineData, Machine, User])],
    controllers: [MachineDataController],
    providers: [MachineDataService, PaginationService],
})
export class MachineDataModule { }
