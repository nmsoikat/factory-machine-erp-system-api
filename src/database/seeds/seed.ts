import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand'
dotenvExpand.expand(dotenv.config())

import * as path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';

import { MainSeeder } from './main.seeder';
import { UserFactory } from './factories/user.factory';
import { MachineFactory } from './factories/machine.factory';
import { MachineDataFactory } from './factories/machine-data.factory';

const options: DataSourceOptions & SeederOptions = {
    type: 'mysql',
    host: process.env.DATA_SOURCE_HOST,
    port: Number(process.env.DATA_SOURCE_PORT),
    username: process.env.DATA_SOURCE_USERNAME,
    password: process.env.DATA_SOURCE_PASSWORD,
    database: process.env.DATA_SOURCE_DATABASE,
    entities: [path.resolve(__dirname, '..', '..', 'features/**/*.entity{.ts,.js}')],
    factories: [UserFactory, MachineFactory, MachineDataFactory],
    seeds: [MainSeeder],
};

const datasource = new DataSource(options);
datasource.initialize().then(async () => {
    await datasource.synchronize(true);
    await runSeeders(datasource);
    process.exit();
});