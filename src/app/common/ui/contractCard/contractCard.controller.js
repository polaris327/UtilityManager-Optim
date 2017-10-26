import { BaseController } from '../../base/controller';

const Tabs = ['costs', 'details', 'resources', 'rating'];

export class ContractCardController extends BaseController {
  constructor(controllerService, energyService, $sce) {
    'ngInject';
    super({ controllerService, energyService, $sce });

    this.expanded = false;
  }

  $onInit() {
    this.tabs = _.filter(Tabs, t => !_.includes(this.offer.hideTabs, t));
    this.chartOptions = {
      elements: {
        arc: {
          borderWidth: 0
        }
      },
      legend: {
        display: true,
        onClick: function () {
          // prevent click actions
        },
        position: 'left',
        labels: {
          fontColor: '#28373c',
          fontSize: 16,
          padding: 15
        }
      },
      tooltips: {
        custom: function (model) {
          if (!model.body) {
            return;
          }

          const body = model.body[0];
          body.lines[0] = body.lines[0].split(':')[0];
        }
      }
    };

    if (!this.offer.href) {
      return;
    }

    this.energyService
      .offerInfo(this.offer.href)
      .then(resources => this.resources = resources);
  }

  selectTab(tab) {
    this.selectedTab = tab;
  }

  trust(detail) {
    return this.$sce.trustAsHtml(detail);
  }
}
