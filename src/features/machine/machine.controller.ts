import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MachineService } from './machine.service';
import { CreateMachineDto } from './dto/create-machine.dto';

@Controller('machine')
export class MachineController {
    constructor(private readonly machineService: MachineService) { }

    @Post()
    create(@Body() createMachineDto: CreateMachineDto) {
        return this.machineService.create(createMachineDto);
    }

    @Get()
    findAll(@Query() query) {
        return this.machineService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.machineService.findOne(+id);
    }
}
