import { forwardRef, Module } from '@nestjs/common'
import { UserModule } from 'src/user/user.module'
import { AuthService } from './auth.service'
import { PassportModule } from '@nestjs/passport'
import { JWT } from 'src/jwt/jwt.module'

@Module({
  imports: [forwardRef(() => UserModule), PassportModule, JWT],
  controllers: [],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
