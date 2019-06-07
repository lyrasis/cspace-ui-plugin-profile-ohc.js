import defaultForm from './default';
import archeologyParentForm from './archeology-parent';
import archeologyChildForm from './archeology-child';
import historyForm from './history';
import naturalHistoryForm from './naturalhistory';

export default configContext => ({
  default: defaultForm(configContext),
  'archeology-parent': archeologyParentForm(configContext),
  'archeology-child': archeologyChildForm(configContext),
  history: historyForm(configContext),
  naturalhistory: naturalHistoryForm(configContext),
  inventory: {
    disabled: true,
  },
  photo: {
    disabled: true,
  },
});
