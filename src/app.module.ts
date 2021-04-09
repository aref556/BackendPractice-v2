import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { memberSchema } from './schemas/member.schema';
import { AccountController } from './controllers/account.controller';
import { MemberController } from './controllers/member.controller';
import { JwtAuthenService, JwtAuthenStrategy } from './services/jwt.authen.service';
import { MemberService } from './services/member.service';
import { SuperadminController } from './controllers/superadmin.controller';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/member_db'),
        MongooseModule.forFeature([
            { name: 'Member', schema: memberSchema },
        ])
    ],
    controllers: [
        AppController,
        AccountController,
        MemberController,
        SuperadminController
    ],
    providers: [
        AppService,
        JwtAuthenService,
        JwtAuthenStrategy,
        MemberService
    ]
})
export class AppModule { }
