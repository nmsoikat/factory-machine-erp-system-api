import { DataSource } from "typeorm";

// @nestjs/config combined these two packages. 
// but we can not use @nestjs/config because of this file will use Outside of the nest context.
// example: execute from cli
import * as dotenv from 'dotenv'; // for using .env
import * as dotenvExpand from 'dotenv-expand' // for use .env variable inside .env

dotenvExpand.expand(dotenv.config()) // we have access env variable from here.

// Outside the context of Nest.
// DB connection using for create migration and run migration using cli
export default new DataSource({
    type: 'mysql',
    host: process.env.DATA_SOURCE_HOST,
    port: Number(process.env.DATA_SOURCE_PORT),
    username: process.env.DATA_SOURCE_USERNAME,
    password: process.env.DATA_SOURCE_PASSWORD,
    database: process.env.DATA_SOURCE_DATABASE,
    entities: ['dist/features/**/*.entity.js'],
    migrations: ['dist/database/migrations/*.js']
})