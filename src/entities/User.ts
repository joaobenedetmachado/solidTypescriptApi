import { uuid } from "uuidv4";

export class User {
    public readonly id : string;
    public name : string;
    public email : string;
    public password : string;

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props); // this is the same as putting this.name = name for each one atributes

        if (!id) {
            this.id = uuid();
        }

    }
}