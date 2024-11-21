import { User } from "../../user/entities/user.entity";
import { Machine } from "../../machine/entities/machine.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MachineDataQA } from "../enums/machine-data-qa.enum";
import * as moment from "moment";

@Entity('machine_data')
export class MachineData {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Machine, (machine_id) => machine_id.machine_data)
    @JoinColumn({ name: "machine_id" })
    machine_id: Machine;

    @ManyToOne(() => User, (user_id) => user_id.machine_data)
    @JoinColumn({ name: "user_id" })
    user_id: User;

    @Column({ default: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") })
    date: Date;

    @Column({
        type: 'enum',
        enum: MachineDataQA,
        default: MachineDataQA.NOT,
        enumName: 'machine_data_qa_enum'
    })
    q1: MachineDataQA;

    @Column({
        type: 'enum',
        enum: MachineDataQA,
        default: MachineDataQA.NOT,
        enumName: 'machine_data_qa_enum'
    })
    q2: MachineDataQA;

    @Column({
        type: 'enum',
        enum: MachineDataQA,
        default: MachineDataQA.NOT,
        enumName: 'machine_data_qa_enum'
    })
    q3: MachineDataQA;

    @Column({
        type: 'enum',
        enum: MachineDataQA,
        default: MachineDataQA.NOT,
        enumName: 'machine_data_qa_enum'
    })
    q4: MachineDataQA;

    @Column({
        type: 'enum',
        enum: MachineDataQA,
        default: MachineDataQA.NOT,
        enumName: 'machine_data_qa_enum'
    })
    q5: MachineDataQA;

    @CreateDateColumn()
    created_at: Date;
}
