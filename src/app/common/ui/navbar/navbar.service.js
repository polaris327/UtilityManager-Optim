import { InjectableClass } from '@fino/lib-injection';

export class NavbarService extends InjectableClass {
  constructor(navbarTabs) {
    'ngInject';
    super({ navbarTabs });
  }

  registerTab(tab) {
    if (!tab.id) {
      throw new Error(`The tab to register is missing an id, given: ${tab}`);
    }
    this.navbarTabs[tab.id] = tab;
  }

  getTabs() {
    return this.navbarTabs;
  }
}
