
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  jwt = new JwtService({ secret: process.env.JWT_SECRET });

  canActivate(ctx: ExecutionContext) {
    const req = ctx.switchToHttp().getRequest();
    const auth = req.headers.authorization;
    if (!auth) throw new UnauthorizedException();

    const token = auth.split(' ')[1];
    try {
      req.user = this.jwt.verify(token, { secret: process.env.JWT_SECRET });
      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }
}
