
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';
import { TeamMember } from './team-member.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team) private teamRepo: Repository<Team>,
    @InjectRepository(TeamMember) private memRepo: Repository<TeamMember>
  ) {}

  async create(dto: CreateTeamDto) {
    const team = await this.teamRepo.save({ name: dto.name, members: [] });

    for (const name of dto.members) {
      const member = await this.memRepo.save({ name, teamId: team.id });
      team.members.push(member.id);
    }

    return this.teamRepo.save(team);
  }

  findAll() { return this.teamRepo.find(); }

  async findOne(id: string) {
    const t = await this.teamRepo.findOneBy({ _id: new ObjectId(id) } as any);
    if (!t) throw new NotFoundException('Not found');
    return t;
  }
}
