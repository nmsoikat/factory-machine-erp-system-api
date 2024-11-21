import { Injectable } from '@nestjs/common';
import { CreateMachineDataDto } from './dto/create-machine-data.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MachineData } from './entities/machine-data.entity';
import { Repository } from 'typeorm';
import { Machine } from 'features/machine/entities/machine.entity';
import { User } from 'features/user/entities/user.entity';
import { PaginationService } from 'common/services/pagination.service';

@Injectable()
export class MachineDataService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Machine)
        private readonly machineRepository: Repository<Machine>,
        @InjectRepository(MachineData)
        private readonly machineDataRepository: Repository<MachineData>,
        private readonly paginate: PaginationService
    ) { }

    async create(createMachineDataDto: CreateMachineDataDto) {
        return await this.machineDataRepository.create(createMachineDataDto)
    }

    async findAll(query) {
        const { machine_type, date, emp_id } = query;
        const where: any = {}
        if (date) {
            where.date = new Date(date)
        }

        if (machine_type) {
            where.machine_id = { machine_type }
        }

        if (emp_id) {
            where.user_id = { emp_id: emp_id }
        }

        const query_options = {
            where,
            relations: {
                machine_id: true,
                user_id: true
            },
            select: {
                user_id: {
                    id: true,
                    emp_id: true,
                    name: true,
                    email: true,
                    phone: true
                }
            },

            ...this.paginate.calculateOffset(query)
        }

        return await this.machineDataRepository.find(query_options);
    }

    async findOne(id: number) {
        return await this.machineDataRepository.findOne({ where: { id } })
    }
}
