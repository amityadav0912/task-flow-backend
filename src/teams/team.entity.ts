
import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Team {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  members: string[];
}
