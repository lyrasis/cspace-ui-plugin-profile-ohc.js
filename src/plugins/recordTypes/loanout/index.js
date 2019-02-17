import forms from './forms';
import fields from './fields';

export default () => configContext => ({
  recordTypes: {
    loanout: {
      forms: forms(configContext),
      fields: fields(configContext),
    },
  },
});
