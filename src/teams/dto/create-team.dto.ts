
import { IsString, IsArray } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  name: string;

  @IsArray()
  members: string[];
}
