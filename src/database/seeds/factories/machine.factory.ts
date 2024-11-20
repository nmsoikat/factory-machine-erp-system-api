import { faker } from '@faker-js/faker';
import { setSeederFactory } from "typeorm-extension";
import { Machine } from '../../../features/machine/entities/machine.entity';
import { MachineType } from '../../../features/machine/enums/machine-type.enum';

export const MachineFactory = setSeederFactory(Machine, () => {
    const machine = new Machine();
    machine.machine_name = faker.company.name();
    machine.machine_type = faker.helpers.enumValue(MachineType);
    return machine;
})