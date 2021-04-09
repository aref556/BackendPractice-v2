import { IsMongoId } from "class-validator";
import { IAccount, RoleAccount } from "src/interfaces/app.interface";

export class CreateMemberModel implements IAccount {
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
    id?: any;
    image?: string;
    role?: RoleAccount;
    created?: Date;
    updated?: Date;
    
    
    
}
export class UpdateMemberModel implements IAccount {
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
    id?: any;
    image?: string;
    role?: RoleAccount;
    created?: Date;
    updated?: Date;
    
}

export class ParamMemberModel {
    @IsMongoId()
    id: number;
}