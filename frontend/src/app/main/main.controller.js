export class MainController {
    constructor ($log) {
        'ngInject';
        this.$log = $log;
    }

    postMessage() {
        this.$log.log('post');
    }
}
