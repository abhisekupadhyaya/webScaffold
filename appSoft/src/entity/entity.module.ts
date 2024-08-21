import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    RouterModule.register([
      {
        path: 'entity',
        children: [
          {
            path: 'user',
            module: UsersModule,
          },
        ],
      },
    ]),
  ],
})
export class EntityModule {}