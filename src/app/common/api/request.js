export class ApiRequest {
  constructor(injections, options) {
    // Assign given injections to the service instance
    this.constructor.injectArguments(this, injections, options);
  }
}