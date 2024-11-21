import { IsDate, IsEmpty } from "class-validator";
import { IsEntity } from "common/decorators/validators/is-entity.decorator";
import { IdDto } from "common/dto/id.dto";
import { MachineDataQA } from "../enums/machine-data-qa.enum";
import { ApiProperty } from "@nestjs/swagger";
export class CreateMachineDataDto {
    @ApiProperty({ example: 84 })
    @IsEntity()
    readonly machine_id: IdDto;

    @ApiProperty({ example: 1 })
    @IsEntity()
    readonly user_id: IdDto;

    @ApiProperty({ example: '2024-11-21 04:08:42' })
    @IsDate()
    readonly date: Date;

    @IsEmpty()
    @ApiProperty({ example: 'yes', enum: MachineDataQA })
    readonly q1: MachineDataQA;

    @IsEmpty()
    @ApiProperty({ example: 'no', enum: MachineDataQA })
    readonly q2: MachineDataQA;

    @IsEmpty()
    @ApiProperty({ example: 'yes', enum: MachineDataQA })
    readonly q3: MachineDataQA;

    @IsEmpty()
    @ApiProperty({ example: 'not', enum: MachineDataQA })
    readonly q4: MachineDataQA;

    @IsEmpty()
    @ApiProperty({ example: 'yes', enum: MachineDataQA })
    readonly q5: MachineDataQA;
}
