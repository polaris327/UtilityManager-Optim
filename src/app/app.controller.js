import { BaseController } from './common/base/controller';

export default class AppController extends BaseController {
  get favicon() {
    return 'https://fino.digital/wp-content/uploads/2016/10/Favicon.png';
  }

  get showNavbar() {
    return this.$state.current.name === 'app.home';
  }
  
  get showSupport() {
    return this.$state.current.name === 'app.home';
  }
  
  get absoluteHeader() {
    return this.$state.current.name === 'app.landingPage';
  }

  get showLinks() {
    return this.envService.getEnvironment().tenant === 'comdirect';
  }
  
  constructor(controllerService) {
    'ngInject';
    super({ controllerService });
  }

  $onInit() {
    this.setFavicon();
    this.showStory = this.$state.params.story;
  }

  setFavicon() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    if (this.envService.getCustom() === "comdirect") {
      link.href = 'https://www.comdirect.de/favicon_196px.png?v=1489585474601%3E';
    } else {
      link.href = 'https://fino.digital/wp-content/uploads/2016/10/Favicon.png';
    }
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  click() {
    if (!this.enableAction) {
      return this.enableAction = true;
    }

    location.href = '/';
  }
}
