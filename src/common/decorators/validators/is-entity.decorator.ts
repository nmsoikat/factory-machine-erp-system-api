import { applyDecorators } from "@nestjs/common";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { IdDto } from "common/dto/id.dto";

export const IsEntity = (): PropertyDecorator => applyDecorators(ValidateNested(), Type(() => IdDto))