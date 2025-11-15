
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task, TaskStatus } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private repo: Repository<Task>) {}

  create(dto: CreateTaskDto) {
    const task = this.repo.create({
      title: dto.title,
      description: dto.description,
      dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
      assigneeId: dto.assigneeId,
      status: dto.status ?? TaskStatus.TODO
    });
    return this.repo.save(task);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: string) {
    const task = await this.repo.findOneBy({ _id: new ObjectId(id) } as any);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  async findByAssignee(assigneeId: string) {
  const tasks = await this.repo.find({
    where: { assigneeId: assigneeId }
  });
  return tasks;
  }

async update(id: string, dto: UpdateTaskDto) {
    // Ensure id is a Mongo ObjectId
    const task = await this.findOne(id);
    // Update using $set
    Object.assign(task, dto); // merge updates
    const updatedTask = await this.repo.save(task);
    console.log(updatedTask);
    return updatedTask;
  }


  async remove(id: string) {
    await this.repo.delete({ _id: new ObjectId(id) } as any);
    return { deleted: true };
  }
}
