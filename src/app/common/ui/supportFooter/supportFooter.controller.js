import { BaseController } from '../../base/controller';

export class SupportFooterController extends BaseController {
  constructor(controllerService) {
    'ngInject';
    super({ controllerService });
  }

  $onInit() {
    this.name = 'supportFooter';
    this.$log.log('onInit', this.name)
    // set the phone number dynamially
    if (this.envService.getCustom() === "comdirect") {
      this.phone = "supportFooter.subtitle_comdirect";
    } else {
      this.phone = "supportFooter.subtitle_fino";
    }
  }
}
