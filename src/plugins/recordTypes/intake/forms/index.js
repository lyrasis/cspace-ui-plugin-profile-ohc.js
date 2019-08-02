import archeologyForm from './archeology';
import historyForm from './history';

export default configContext => ({
  doorstep: {
    disabled: true,
  },
  archeology: archeologyForm(configContext),
  history: historyForm(configContext),
});
