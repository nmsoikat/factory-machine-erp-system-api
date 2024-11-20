import { Injectable } from '@nestjs/common';
import { CreateMachineDataDto } from './dto/create-machine-data.dto';

@Injectable()
export class MachineDataService {
  create(createMachineDatumDto: CreateMachineDataDto) {
    return 'This action adds a new machineDatum';
  }

  findAll() {
    return `This action returns all machineData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} machineDatum`;
  }
}
