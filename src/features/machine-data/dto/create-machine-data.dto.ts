import { IsDate, IsEmpty } from "class-validator";
import { IsInt, IsPositive } from "class-validator";
export class CreateMachineDataDto {
    @IsInt()
    @IsPositive()
    readonly machine_id: number;

    @IsInt()
    @IsPositive()
    readonly user_id: number;

    @IsDate()
    readonly date: Date;

    @IsEmpty()
    readonly q1: string;

    @IsEmpty()
    readonly q2: string;

    @IsEmpty()
    readonly q3: string;

    @IsEmpty()
    readonly q4: string;

    @IsEmpty()
    readonly q5: string;
}
