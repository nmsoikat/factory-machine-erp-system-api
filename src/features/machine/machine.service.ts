import { Injectable } from '@nestjs/common';
import { CreateMachineDto } from './dto/create-machine.dto';
import { Machine } from './entities/machine.entity';
import { ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationService } from 'common/services/pagination.service';

@Injectable()
export class MachineService {
    constructor(
        @InjectRepository(Machine)
        private readonly machineRepository: Repository<Machine>,
        private readonly paginate: PaginationService
    ) { }

    async create(createMachineDto: CreateMachineDto) {
        return await this.machineRepository.create(createMachineDto)
    }

    async findAll(query) {
        const { machine_name, machine_type } = query;

        const where: any = {}

        if (machine_type) {
            where.machine_type = machine_type
        }

        if (machine_name) {
            where.machine_name = ILike(`%${machine_name}%`)
        }

        const query_options = {
            where,
            relations: {
                machine_data: true,
            },
            ...this.paginate.calculateOffset(query)
        }

        return await this.machineRepository.find(query_options);
    }

    async findOne(id: number) {
        return await this.machineRepository.findOne({ where: { id } })
    }
}
