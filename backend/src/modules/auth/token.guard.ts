import { CanActivate, ExecutionContext, Injectable, NotFoundException } from "@nestjs/common";
import { TokenService } from "../token/token.service";
import { Observable } from "rxjs";

@Injectable()
export class TokenGuard implements CanActivate {
    constructor(private readonly tokenService: TokenService) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.cookies['access-token'];

        if (!token)
            throw new NotFoundException('Użytkownik nie jest zalogowany.');

        try {
            const payload = this.tokenService.verifyToken(token);
            request.userId = payload.sub;
            return true;
        } catch (e) {
            throw new NotFoundException('Token nie został zweryfikowany pomyślnie.');
        }
    }
}