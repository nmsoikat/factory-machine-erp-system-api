import { IsEmail, IsEnum, IsPhoneNumber, Length, Matches } from "class-validator";
import { MachineType } from "../enums/machine-type.enum";

export class CreateMachineDto {
    @Length(2, 100)
    readonly machine_name: string;

    @IsEnum(MachineType)
    readonly machine_type: MachineType;
}
