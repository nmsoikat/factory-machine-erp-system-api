import { MachineType } from "../enums/machine-type.enum";
import { MachineData } from "../../machine-data/entities/machine-data.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('machines')
export class Machine {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    machine_name: string;

    @Column({
        type: 'enum',
        enum: MachineType,
        default: MachineType.MAKER,
        enumName: 'machine_type_enum'
    })
    machine_type: MachineType;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => MachineData, (machine_data) => machine_data.machine_id)
    machine_data: MachineData[];
}
