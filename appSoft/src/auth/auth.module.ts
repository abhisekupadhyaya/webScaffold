import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './guard/local/local.strategy';
import { JwtStrategy } from './guard/jwt/jwt.strategy';
import { AccountsModule } from '../accounts/accounts.module'
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './guard/constants';

@Module({
  imports: [
    AccountsModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}