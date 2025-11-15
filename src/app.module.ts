import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { TeamsModule } from './teams/teams.module';
import { Task } from './tasks/task.entity';
import { Team } from './teams/team.entity';
import { TeamMember } from './teams/team-member.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGO_URI,
      synchronize: true,
      entities: [Task, Team, TeamMember],
    }),

    TasksModule,
    TeamsModule,
    AuthModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
})
export class AppModule {}
