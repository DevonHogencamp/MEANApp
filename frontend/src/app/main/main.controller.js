/*
    Author: Devon Hogencamp
    Date: 3-2-17
    main.controller.js

    Purpose: Controller for main.html page

    3-3-17: Put in $http so we can send POST messages
*/

export class MainController {
    constructor ($http) {
        'ngInject';
        this.$http = $http;
        this.getMessages();
    }

    getMessages() {
        var vm = this;

        this.$http.get('http://localhost:8080/api/message').then(function (result) {
            vm.messages = result.data;
        });
    }

    postMessage() {
        this.$http.post('http://localhost:8080/api/message', {
            msg: this.msg
        });
    }
}
