import _ from 'lodash';

export class Offer {
  get workPrice() {
    const workPriceItem = _.find(this.costItems, ci => ci.header === 'Arbeitspreis');
    const amount = workPriceItem && workPriceItem.body &&  workPriceItem.body.match(/(\d|,)+/g);
    return amount && amount.length && parseFloat(amount[0].replace(',', '.'));
  }

  get costItems() {
    const costItems = _.get(this.offer, 'cost.totalCost.totalCostItem');
    return _.map(costItems, ci => {
      const { caption, content } = ci;
      return {
        header: caption,
        body: content
      };
    });
  }

  get detailItems() {
    return _.map(this.offer.remarks, r => r.tooltip);
  }

  get ratings() {
    let userRatings = _.get(this.offer, 'provider[0].userRatings');
    userRatings = _.filter(userRatings, (val, key) => !!val.header && !!val.stars);
    return _.map(userRatings, (val, key) => {
      const { header, stars } = val;
      const ratingMatch = stars.match(/\d(,\d)?(.*)5/gm);
      let rating = null;
      if (ratingMatch && ratingMatch.length) {
        rating = ratingMatch[0].match(/^\d(,\d)?/gm);
      }
      return {
        header,
        body: {
          text: stars,
          rating: rating && rating.length && rating[0] && parseInt(rating[0].replace(',', '.'))
        }
      };
    });
  }

  get show() {
    return !!this.url;
  }

  constructor(offer) {
    // offer is already set when using cached values
    this.offer = offer.offer || offer;
    this.href = this.getHref();
    this.rank = this.getRank();
    this.name = this.getName();
    this.details = this.getDetails();
    this.sections = this.getSections();
    this.url = this.getVerivoxUrl();
    this.tariff = this.getTariff();
    this.totalCosts = this.getTotalCosts();
    this.totalRating = this.getTotalRating();
    this.savings = this.getSavings();
    this.reviewContent = this.getReviewContent();
    this.logo = this.getLogo();
    this.interval = 12;
    this.hideTabs = [];
  }

  getRank() {
    return this.offer.rank;
  }

  getName() {
    return _.get(this.offer, 'provider[0].name[0]');
  }

  getDetails() {
    return _.map(this.offer.remarks, r => r.content);
  }

  getSections() {
    const details = angular.copy(this.detailItems);
    const costs = angular.copy(this.costItems);
    const ratings = angular.copy(this.ratings);
    return {
      details,
      costs,
      ratings
    };
  }
  
  getHref() {
    return _.get(this.offer, 'link.href');
  }

  getVerivoxUrl() {
    return _.get(this.offer, 'subdomain.url');
  }

  getTotalCosts() {
    return parseFloat(_.get(this.offer, 'cost.totalCost.amount'));
  }

  getTariff() {
    return _.get(this.offer, 'tariff');
  }

  getTotalRating() {
    return Math.round(_.sumBy(this.ratings, 'body.rating') / this.ratings.length);
  }

  getSavings() {
    return parseFloat(_.get(this.offer, 'cost.savings.amount')) * -1;
  }

  getReviewContent() {
    return _.get(this.offer, 'provider[0].userRatings.switchAgain.content');
  }

  getLogo() {
    return _.get(this.offer, 'provider[0].logoURL');
  }

  // compareTotalPriceTo(offer) {
  //   return this.totalCosts < offer.totalCosts ? -1 : 1;
  // }

  // compareWorkPriceTo(offer) {
  //   if (!offer.workPrice) {
  //     return -1;
  //   }

  //   return this.workPrice && this.workPrice < offer.workPrice ? -1 : 1;
  // }
}
