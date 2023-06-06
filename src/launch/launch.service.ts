import { Injectable } from '@nestjs/common';
import { Launch } from './launch.entity';
import { CreateLaunchEvent } from 'src/events/create.lauch.enven';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';

@Injectable()
export class LaunchService {
  constructor(
    @InjectRepository(Launch) private repositoryLaunch: Repository<Launch>,
  ) {}

  async handleLaunchCreated(data: CreateLaunchEvent) {
    const createdLaunch = await this.repositoryLaunch.create({
      date: data.date,
      description: data.description,
      type: data.type,
      value: data.value,
    });
    console.log(createdLaunch);
    await this.repositoryLaunch.save(createdLaunch);
    return createdLaunch;
  }

  async handleLaunchAll() {
    const findAll = await this.repositoryLaunch.find();
    return findAll;
  }

  async handleLaunchByToday() {
    const d = new Date();
    const launchDebit = await this.getLauchByTypeToday('debit');
    const launchCredit = await this.getLauchByTypeToday('credit');
    const debitValue = launchDebit.reduce((acc, curr) => acc + curr.value, 0);

    const creditValue = launchCredit.reduce((acc, curr) => acc + curr.value, 0);

    return {
      credit: launchCredit,
      debit: launchDebit,
      creditValue,
      debitValue,
      total: creditValue - debitValue,
    };
  }

  async getLauchByTypeToday(type: string): Promise<Launch[]> {
    const d = new Date();
    return await this.repositoryLaunch.find({
      where: {
        type,
        date: Between(
          new Date(d.getFullYear(), d.getMonth(), d.getDate()),
          new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1),
        ),
      },
    });
  }
}
