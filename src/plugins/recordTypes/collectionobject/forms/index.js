import defaultForm from './default';
import archeolgyForm from './archeology';
import historyForm from './history';
import naturalHistoryForm from './naturalhistory';

export default configContext => ({
  default: defaultForm(configContext),
  archeology: archeolgyForm(configContext),
  history: historyForm(configContext),
  naturalhistory: naturalHistoryForm(configContext),
});
