import { Module } from '@nestjs/common';
import { MachineDataService } from './machine-data.service';
import { MachineDataController } from './machine-data.controller';

@Module({
  controllers: [MachineDataController],
  providers: [MachineDataService],
})
export class MachineDataModule {}
