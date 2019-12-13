import optionLists from './optionLists';
import forms from './forms';

export default () => configContext => ({
  optionLists,
  recordTypes: {
    objectexit: {
      forms: forms(configContext),
    },
  },
});
