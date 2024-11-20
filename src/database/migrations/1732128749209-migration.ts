import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732128749209 implements MigrationInterface {
    name = 'Migration1732128749209'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`machines\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`machine_name\` varchar(255) NOT NULL,
                \`machine_type\` enum ('maker', 'packer') NOT NULL DEFAULT 'maker',
                \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`machine_data\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`date\` varchar(255) NOT NULL,
                \`q1\` varchar(255) NOT NULL,
                \`q2\` varchar(255) NOT NULL,
                \`q3\` varchar(255) NOT NULL,
                \`q4\` varchar(255) NOT NULL,
                \`q5\` varchar(255) NOT NULL,
                \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`machine_id\` int NULL,
                \`user_id\` int NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`users\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`name\` varchar(255) NOT NULL,
                \`emp_id\` varchar(255) NOT NULL,
                \`email\` varchar(255) NOT NULL,
                \`phone\` varchar(255) NOT NULL,
                \`password\` varchar(255) NOT NULL,
                \`last_login\` datetime NOT NULL,
                \`last_pass_update\` datetime NOT NULL,
                \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            ALTER TABLE \`machine_data\`
            ADD CONSTRAINT \`FK_faeb5220dc7ffded7460b5fa785\` FOREIGN KEY (\`machine_id\`) REFERENCES \`machines\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`machine_data\`
            ADD CONSTRAINT \`FK_0fe7db3b027fd237ef43d61ae6c\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`machine_data\` DROP FOREIGN KEY \`FK_0fe7db3b027fd237ef43d61ae6c\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`machine_data\` DROP FOREIGN KEY \`FK_faeb5220dc7ffded7460b5fa785\`
        `);
        await queryRunner.query(`
            DROP TABLE \`users\`
        `);
        await queryRunner.query(`
            DROP TABLE \`machine_data\`
        `);
        await queryRunner.query(`
            DROP TABLE \`machines\`
        `);
    }

}
