import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MachineDataService } from './machine-data.service';
import { CreateMachineDataDto } from './dto/create-machine-data.dto';

@Controller('machine-data')
export class MachineDataController {
    constructor(private readonly machineDataService: MachineDataService) { }

    @Post()
    async create(@Body() createMachineDataDto: CreateMachineDataDto) {
        return await this.machineDataService.create(createMachineDataDto);
    }

    @Get()
    findAll(@Query() query) {
        return this.machineDataService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.machineDataService.findOne(+id);
    }
}
