import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MachineDataService } from './machine-data.service';
import { CreateMachineDataDto } from './dto/create-machine-data.dto';
import { ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { MachineType } from 'features/machine/enums/machine-type.enum';
import { MachineData } from './entities/machine-data.entity';

@Controller('machine-data')
export class MachineDataController {
    constructor(private readonly machineDataService: MachineDataService) { }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: MachineData })
    async create(@Body() createMachineDataDto: CreateMachineDataDto) {
        return await this.machineDataService.create(createMachineDataDto);
    }

    @Get()
    @ApiQuery({ name: 'machine_type', enum: MachineType, example: 'maker', required: false })
    @ApiQuery({ name: 'date', type: Date, example: '2024-11-21 04:08:42', required: false })
    @ApiQuery({ name: 'emp_id', example: '1', required: false })
    @ApiQuery({ name: 'page', example: '1', default: '1', required: false })
    @ApiQuery({ name: 'limit', example: '20', default: '20', required: false })
    findAll(@Query() query) {
        return this.machineDataService.findAll(query);
    }

    @Get(':id')
    @ApiParam({ name: 'id', example: '1', required: true })
    findOne(@Param('id') id: string) {
        return this.machineDataService.findOne(+id);
    }
}
