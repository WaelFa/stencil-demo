import {action, observable } from "mobx";


export class Login {

    @observable
    public authenticated : boolean = false;

    @action
    public login(admin: string, password: string) {
        if ((password === "password") && (admin === "admin")) {
            this.authenticated = true;
        }
    }

}
