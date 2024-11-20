import { User } from "features/user/entities/user.entity";
import { Machine } from "features/machine/entities/machine.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('machine_data')
export class MachineData {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Machine, (machine) => machine.machine_data)
    machine_id: Machine;

    @ManyToOne(() => User, (user) => user.machine_data)
    user_id: User;

    @Column()
    date: string;

    @Column()
    q1: string;

    @Column()
    q2: string;

    @Column()
    q3: string;

    @Column()
    q4: string;

    @Column()
    q5: string;

    @CreateDateColumn()
    created_at: Date;
}
