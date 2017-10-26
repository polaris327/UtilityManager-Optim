import ThankYouModule from './thankYou'
import ThankYouController from './thankYou.controller';
import ThankYouComponent from './thankYou.component';
import ThankYouTemplate from './thankYou.html';

describe('ThankYou', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ThankYouModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ThankYouController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ThankYouTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ThankYouComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(ThankYouTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ThankYouController);
    });
  });
});
