export class MainController {
  constructor ($http, API_URL) {
    'ngInject';
    this.$http = $http;
    this.API_URL = API_URL;
    this.getMessages();
  }

  getMessages() {
    var vm = this;
    this.$http.get('http://localhost:5000/api/message').then(function(result) {
      vm.messages = result.data;
    });
  }

  postMessage() {
    this.$http.post(this.API_URL+'api/message', {"msg": this.msg});
  }
}
