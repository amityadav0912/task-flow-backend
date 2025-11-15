import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  private user = { username: 'admin', password: 'password', id: '1' };

  constructor(private jwt: JwtService) {}

  login(username: string, password: string) {
    if (username !== this.user.username || password !== this.user.password) {
      throw new UnauthorizedException();
    }

    return {
      access_token: this.jwt.sign({
        sub: this.user.id,
        username,
      }),
    };
  }
}
