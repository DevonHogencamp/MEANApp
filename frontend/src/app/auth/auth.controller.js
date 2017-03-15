export class AuthController {
    constructor($auth) {
        'ngInject';
        this.$auth = $auth;
    }

    register() {
        this.$auth.signup({
            email: this.user.email,
            pwd: this.user.pwd
        });
    }
}
