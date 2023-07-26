import { PartialType } from '@nestjs/mapped-types';
import { CreateShieldDto } from './create-shield.dto';

export class UpdateShieldDto extends PartialType(CreateShieldDto) {}
