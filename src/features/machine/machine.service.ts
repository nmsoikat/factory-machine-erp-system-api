import { Injectable } from '@nestjs/common';
import { CreateMachineDto } from './dto/create-machine.dto';

@Injectable()
export class MachineService {
  create(createMachineDto: CreateMachineDto) {
    return 'This action adds a new machine';
  }

  findAll() {
    return `This action returns all machine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} machine`;
  }
}
