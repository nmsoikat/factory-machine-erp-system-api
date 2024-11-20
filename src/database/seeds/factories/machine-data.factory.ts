import { faker } from '@faker-js/faker';
import { setSeederFactory } from "typeorm-extension";
import { MachineData } from '../../../features/machine-data/entities/machine-data.entity';
import { MachineDataQA } from '../../../features/machine-data/enums/machine-data-qa.enum';

export const MachineDataFactory = setSeederFactory(MachineData, () => {
    const machineData = new MachineData();
    machineData.date = faker.date.anytime();
    machineData.q1 = faker.helpers.enumValue(MachineDataQA);
    machineData.q2 = faker.helpers.enumValue(MachineDataQA);
    machineData.q3 = faker.helpers.enumValue(MachineDataQA);
    machineData.q4 = faker.helpers.enumValue(MachineDataQA);
    machineData.q5 = faker.helpers.enumValue(MachineDataQA);
    return machineData;
})