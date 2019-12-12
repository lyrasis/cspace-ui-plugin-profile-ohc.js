import defaultForm from './default';
import archeologyParentForm from './archeology-parent';
import archeologyChildForm from './archeology-child';
import progArcheologyForm from './prog-archaeology';
import historyForm from './history';
import progHistoryForm from './prog-history';
import naturalHistoryForm from './naturalhistory';
import progNaturalHistoryForm from './prog-naturalhistory';

export default configContext => ({
  default: defaultForm(configContext),
  'archeology-parent': archeologyParentForm(configContext),
  'archeology-child': archeologyChildForm(configContext),
  'prog-archeology': progArcheologyForm(configContext),
  history: historyForm(configContext),
  'prog-history': progHistoryForm(configContext),
  naturalhistory: naturalHistoryForm(configContext),
  'prog-naturalhistory': progNaturalHistoryForm(configContext),
  inventory: {
    disabled: true,
  },
  photo: {
    disabled: true,
  },
});
