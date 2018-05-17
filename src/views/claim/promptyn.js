// import {DialogController} from '../dialog-controller';
  import {DialogController} from 'aurelia-dialog';
export class Promptyn {
  static inject = [DialogController];

  constructor(controller) {
    this.controller = controller;
    this.answer = null;

    controller.settings.lock = false;
  }

  activate(question) {
    this.question = question;
  }
}