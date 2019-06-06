import defaultForm from './default';
import archeolgyParentForm from './archeology-parent';
import archeolgyChildForm from './archeology-child';
import historyForm from './history';
import naturalHistoryForm from './naturalhistory';
import inventoryForm from './inventory';
import photoForm from './photo';

export default configContext => ({
  default: defaultForm(configContext),
  'archeology-parent': archeolgyParentForm(configContext),
  'archeology-child': archeolgyChildForm(configContext),
  history: historyForm(configContext),
  naturalhistory: naturalHistoryForm(configContext),
  inventory: inventoryForm(configContext),
  photo: photoForm(configContext),
});
