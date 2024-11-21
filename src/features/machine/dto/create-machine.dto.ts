import { IsEmail, IsEnum, IsPhoneNumber, Length, Matches } from "class-validator";
import { MachineType } from "../enums/machine-type.enum";
import { ApiProperty } from "@nestjs/swagger";

export class CreateMachineDto {
    @Length(2, 100)
    @ApiProperty({ example: 'dev' })
    readonly machine_name: string;

    @IsEnum(MachineType)
    @ApiProperty({ example: 'maker', enum: MachineType })
    readonly machine_type: MachineType;
}
