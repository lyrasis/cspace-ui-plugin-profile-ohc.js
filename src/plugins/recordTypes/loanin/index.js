import forms from './forms';
import fields from './fields';

export default () => configContext => ({
  recordTypes: {
    loanin: {
      forms: forms(configContext),
      fields: fields(configContext),
    },
  },
});
