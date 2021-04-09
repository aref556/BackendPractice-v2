import { Controller, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller('api/superadmin')
@UseGuards(AuthGuard('jwt'))

export class SuperadminController {
    constructor () { }

}