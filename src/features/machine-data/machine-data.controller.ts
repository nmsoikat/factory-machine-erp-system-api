import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MachineDataService } from './machine-data.service';
import { CreateMachineDataDto } from './dto/create-machine-data.dto';

@Controller('machine-data')
export class MachineDataController {
  constructor(private readonly machineDataService: MachineDataService) { }

  @Post()
  create(@Body() createMachineDataDto: CreateMachineDataDto) {
    return this.machineDataService.create(createMachineDataDto);
  }

  @Get()
  findAll() {
    return this.machineDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.machineDataService.findOne(+id);
  }
}
