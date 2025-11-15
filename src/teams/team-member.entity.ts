
import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class TeamMember {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  teamId: string;
}
