import { defineMessages } from 'react-intl';

export default {
  entryReasons: {
    values: [
      'loan',
      'referral',
    ],
    messages: defineMessages({
      loan: {
        id: 'option.entryReasons.loan',
        defaultMessage: 'loan',
      },
      referral: {
        id: 'option.entryReasons.referral',
        defaultMessage: 'referral',
      },
    }),
  },
};
