import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { LaunchService } from './launch.service';
import { CreateLaunchEvent } from '../events/create.lauch.enven';

@Controller('launch')
export class LaunchController {
  constructor(private readonly service: LaunchService) {}

  @MessagePattern({ cmd: 'create_launch' })
  handleCreateLauch(data: CreateLaunchEvent) {
    return this.service.handleLaunchCreated(data);
  }

  @MessagePattern({ cmd: 'find_all_launch' })
  handleFindAll() {
    return this.service.handleLaunchAll();
  }

  @MessagePattern({ cmd: 'find_launch_by_today' })
  handleFindbyMonth() {
    return this.service.handleLaunchByToday();
  }
}
