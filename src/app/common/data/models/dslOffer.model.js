import { Offer } from './offer.model';

export class DslOffer extends Offer {
  get download() {
    const download = _.get(this.offer, 'donwloadSpeed');
    return parseInt(download.replace(/\D/g,''));
  }

  get ratings() {
    let userRatings = _.get(this.offer, 'userRatings.userRatingItems');
    return _.map(userRatings, ur => {
      const percent = parseFloat(ur.percent);
      const stars = 5 * (percent/100);
      return {
        header: ur.caption,
        body: {
          text: `${ur.rating} (${Math.round(stars)} von 5 Sternen)`,
          rating: stars
        }
      };
    });
  }
  
  get detailItems() {
    const details = _.get(this.offer, 'topLevelRemarks');
    return _.map(details, d => {
      return {
        header: d.remarkHeader,
        body: d.remarkBody
      };
    });
  }

  get costItems() {
    const costItems = _.get(this.offer, 'costFlats');
    return _.reduce(costItems, (acc, ci) => {
      if (ci.header === 'Anmerkungen zur Berechnung') {
        return acc;
      }

      acc.push({
        header: ci.header,
        body: ci.body
      });
      if (ci.items) {
        acc = acc.concat(this.getCostItems(ci.items));
      }
      return acc;
    }, []);
  }

  constructor(offer) {
    super(offer);
    this.interval = 1;
    this.hideTabs = ['resources'];

    if (!this.sections.ratings.length) {
      this.hideTabs.push('rating');
    }
  }

  getCostItems(items) {
    return _.map(items, ci => {
      return {
        header: ci.header,
        body: ci.body,
        light: true
      };
    });
  }
  
  getTariff() {
    return _.get(this.offer, 'productShortName');
  }

  getTotalCosts() {
    return parseFloat(_.get(this.offer, 'totalCost').replace(/€\/.*/, '').replace(',', '.'));
  }
  
  getTotalRating() {
    return _.get(this.offer, 'userRatings.percent') / 100 * 5;
  }
  
  getReviewContent() {
    return _.get(this.offer, 'userRatings.body');
  }

  getName() {
    return _.get(this.offer, 'providerShortName');
  }
  
  getLogo() {
    return _.get(this.offer, 'providerLogoUrl');
  }

  getVerivoxUrl() {
    return _.get(this.offer, 'productLink');
  }

  getDetails() {
    const duration = _.get(this.offer, 'contractDuration');
    const cancellation = _.get(this.offer, 'cancellationPeriod');
    const download = _.get(this.offer, 'donwloadSpeed');
    const upload = _.get(this.offer, 'uploadSpeed');
    const options = _.get(this.offer, 'additionalOptionsItems');
    let details = [
      `<i class="fa fa-download"></i> ${download}`,
      `<i class="fa fa-upload"></i> ${upload}`,
      `${duration.header}: ${duration.body}`,
      `${cancellation.header}: ${cancellation.body}`
    ];
    details = details.concat(_.map(options, o => `${o.name}: ${o.recurringCost}`));
    return _.uniq(details);
  }

  getSavings() {
    return null;
  }
}