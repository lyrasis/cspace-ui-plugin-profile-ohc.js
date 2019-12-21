import optionLists from './optionLists';
import forms from './forms';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    acquisition: {
      forms: forms(configContext),
    },
  },
});
