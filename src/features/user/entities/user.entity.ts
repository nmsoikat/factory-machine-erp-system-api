import { Exclude } from "class-transformer";
import { MachineData } from "features/machine-data/entities/machine-data.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    emp_id: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Exclude()
    @Column()
    password: string;

    @Column()
    last_login: Date;

    @Column()
    last_pass_update: Date;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => MachineData, (machine_data) => machine_data.user_id)
    machine_data: MachineData[];
}