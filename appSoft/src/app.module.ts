import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { JwtAuthGuard } from './auth/guard/jwt/jwt-auth.guard';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AccountsModule } from './accounts/accounts.module';
import { EntityModule } from './entity/entity.module';

@Module({
  imports: [AuthModule, AccountsModule, MongooseModule.forRoot('mongodb://mongosoft:27017/dbSoft'), EntityModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
