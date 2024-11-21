import { Injectable } from '@nestjs/common';
import { CreateMachineDto } from './dto/create-machine.dto';
import { Machine } from './entities/machine.entity';
import { ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MachineService {
    constructor(
        @InjectRepository(Machine)
        private readonly machineRepository: Repository<Machine>
    ) { }

    async create(createMachineDto: CreateMachineDto) {
        return await this.machineRepository.create(createMachineDto)
    }

    async findAll(query) {
        const { machine_name, machine_type } = query;

        return await this.machineRepository.find({
            where: {
                machine_name: ILike(`%${machine_name}%`),
                machine_type
            },
            relations: {
                machine_data: true,
            }
        });
    }

    async findOne(id: number) {
        return await this.machineRepository.findOne({ where: { id } })
    }
}
