import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MachineService } from './machine.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { ApiCreatedResponse, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { MachineType } from './enums/machine-type.enum';
import { Machine } from './entities/machine.entity';

@Controller('machine')
export class MachineController {
    constructor(private readonly machineService: MachineService) { }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: CreateMachineDto })
    create(@Body() createMachineDto: CreateMachineDto) {
        return this.machineService.create(createMachineDto);
    }

    @Get()
    @ApiQuery({ name: 'machine_type', enum: MachineType, example: 'maker', required: false })
    @ApiQuery({ name: 'machine_name', required: false })
    @ApiQuery({ name: 'page', example: '1', default: '1', required: false })
    @ApiQuery({ name: 'limit', example: '20', default: '20', required: false })
    findAll(@Query() query) {
        return this.machineService.findAll(query);
    }

    @Get(':id')
    @ApiParam({ name: 'id', example: '1', required: true })
    findOne(@Param('id') id: string) {
        return this.machineService.findOne(+id);
    }
}
