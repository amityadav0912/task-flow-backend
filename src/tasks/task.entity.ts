
import { Entity, ObjectIdColumn, Column } from 'typeorm';

export enum TaskStatus {
  TODO='todo',
  IN_PROGRESS='in_progress',
  DONE='done'
}

@Entity()
export class Task {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string

  @Column()
  description: string;

  @Column()
  dueDate?: Date;

  @Column()
  assigneeId?: string;

  @Column({ default: TaskStatus.TODO })
  status: TaskStatus;
}
