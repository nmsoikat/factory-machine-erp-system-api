import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension'

import { User } from '../../features/user/entities/user.entity';
import { Machine } from '../../features/machine/entities/machine.entity';
import { MachineData } from '../../features/machine-data/entities/machine-data.entity';
import { faker } from '@faker-js/faker';

export class MainSeeder implements Seeder {
    public async run(dataSource: DataSource, factoryManager: SeederFactoryManager) {
        console.log('Seeding users...');
        const userFactory = factoryManager.get(User);
        const users = await userFactory.saveMany(10);

        console.log('Seeding machine...');
        const machineFactory = factoryManager.get(Machine);
        const machines = await machineFactory.saveMany(100);

        console.log('Seeding machine-data...');
        const machineDataFactory = factoryManager.get(MachineData);
        const machineDataItems = await Promise.all(
            Array(1000)
                .fill('')
                .map(async () => {
                    const machineData = await machineDataFactory.make({
                        user_id: faker.helpers.arrayElement(users),
                        machine_id: faker.helpers.arrayElement(machines),
                    });
                    return machineData;
                }),
        );
        const machineDataRepo = dataSource.getRepository(MachineData);
        await machineDataRepo.save(machineDataItems);

        console.log('Done!');
    }
}