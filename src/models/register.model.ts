import { IsNotEmpty, IsNumber, Matches } from "class-validator";

import { IRegister, RoleAccount } from "src/interfaces/app.interface";

export class RegisterModel implements IRegister {
    username: string;
    password: string;

    rsakey: string;
    flagrsa: boolean;

    macaddress: string;
    hashmac: string;

    firstname: string;
    lastname: string;
    telphone: string;
    email: string;
    facebook: string;
    line: string;

    latitude: string;
    longtitude: string;
    organization: string;
    num: string;
    subdistrict: string;
    district: string;
    province: string;
    zipcode: string;
   
    

}