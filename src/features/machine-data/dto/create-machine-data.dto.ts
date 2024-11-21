import { IsDate, IsEmpty } from "class-validator";
import { IsEntity } from "common/decorators/validators/is-entity.decorator";
import { IdDto } from "common/dto/id.dto";
import { MachineDataQA } from "../enums/machine-data-qa.enum";
export class CreateMachineDataDto {
    @IsEntity()
    readonly machine_id: IdDto;

    @IsEntity()
    readonly user_id: IdDto;

    @IsDate()
    readonly date: Date;

    @IsEmpty()
    readonly q1: MachineDataQA;

    @IsEmpty()
    readonly q2: MachineDataQA;

    @IsEmpty()
    readonly q3: MachineDataQA;

    @IsEmpty()
    readonly q4: MachineDataQA;

    @IsEmpty()
    readonly q5: MachineDataQA;
}
