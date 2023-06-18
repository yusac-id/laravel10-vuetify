export interface UserInterface {
    id?: number;
    name?: string;
    email?: string;
    username?: string;
    role?: string;
}

export class UserModel {
    id: number;
    name: string;
    email: string;
    username: string;
    role: string;

    constructor(obj: UserInterface) {
        Object.assign(this, obj);
    }
}
