import { CanActivate, ExecutionContext, Injectable, NotFoundException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class BasicGuard implements CanActivate {
    constructor(private readonly authService: AuthService) { }

    private decode(coded: string) {
        const b64 = coded.split(' ')[1];
        if (!b64)
            return undefined;
        const decoded = Buffer.from(b64, 'base64').toString().split(':');
        if (decoded.length != 2)
            return undefined;
        return {
            email: decoded[0],
            password: decoded[1]
        }
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const auth = request.headers['authorization'];

        if (!auth)
            throw new NotFoundException('Nagłówek nie posiada pola authorization.');

        const { email, password } = this.decode(auth);
        if (!email || !password)
            throw new NotFoundException('Nie udało się zdekodować użytkownika.');

        const user = await this.authService.verifyUser(email, password);
        if (!user)
            throw new NotFoundException('Użytkownik o podanym adresie email nie istnieje.');

        request.userId = user.id;
        return true;
    }
}