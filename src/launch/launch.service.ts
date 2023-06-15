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
    if (data.type === 'debit') {
      const balance = await this.getBalanceFull();
      console.log();
      const balanceAfter = balance - data.value;

      if (balanceAfter < 0) {
        return {
          error: true,
          found: balance,
          debit: data.value,
          message: 'insufficient funds',
        };
      }
    }

    const createdLaunch = await this.repositoryLaunch.create({
      date: data.date,
      description: data.description,
      type: data.type,
      value: data.value,
    });
    await this.repositoryLaunch.save(createdLaunch);
    return createdLaunch;
  }

  async handleLaunchAll() {
    const findAll = await this.repositoryLaunch.find();
    return findAll;
  }

  async handleLaunchByToday() {
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

  async getBalanceFull() {
    const debit = await this.repositoryLaunch.find({
      where: {
        type: 'debit',
      },
    });

    const credit = await this.repositoryLaunch.find({
      where: {
        type: 'credit',
      },
    });

    const debitValue = debit.reduce((acc, curr) => acc + curr.value, 0);

    const creditValue = credit.reduce((acc, curr) => acc + curr.value, 0);

    return creditValue - debitValue;
  }
}
