import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { EnvModule } from './env/env.module';
import { MachineModule } from './features/machine/machine.module';
import { MachineDataModule } from './features/machine-data/machine-data.module';
import { UserModule } from './features/user/user.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [DatabaseModule, EnvModule, MachineModule, MachineDataModule, UserModule, CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
