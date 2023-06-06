import { Module } from '@nestjs/common';
import { LaunchController } from './launch.controller';
import { LaunchService } from './launch.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Launch } from './launch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Launch])],
  controllers: [LaunchController],
  providers: [LaunchService],
})
export class LaunchModule {}
