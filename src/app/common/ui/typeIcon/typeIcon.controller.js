import { BaseController } from '../../base/controller';
import { CompareMode } from '../../../components/home/home.constants';

const Icons = {
  [CompareMode.Electricity]: 'fa-plug',
  [CompareMode.Gas]: 'fa-fire',
  [CompareMode.Dsl]: 'fa-globe'
};

export class TypeIconController {
  get icon() {
    return Icons[this.type];
  }
}
