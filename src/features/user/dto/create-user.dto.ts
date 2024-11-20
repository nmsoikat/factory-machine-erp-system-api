import { IsEmail, IsPhoneNumber, Length } from "class-validator";

export class CreateUserDto {
    @Length(2, 100)
    readonly name: string;

    readonly emp_id: string;

    @IsEmail()
    readonly email: string;

    @IsPhoneNumber('BD')
    readonly phone: string;

    @Length(6)
    readonly password: string;
}
