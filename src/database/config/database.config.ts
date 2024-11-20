import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export default registerAs('database', () => {
    const config = {
        type: 'mysql',
        host: process.env.DATA_SOURCE_HOST,
        port: Number(process.env.DATA_SOURCE_PORT),
        username: process.env.DATA_SOURCE_USERNAME,
        password: process.env.DATA_SOURCE_PASSWORD,
        database: process.env.DATA_SOURCE_DATABASE,
        autoLoadEntities: true
    } as const satisfies TypeOrmModuleOptions

    return config;
})
