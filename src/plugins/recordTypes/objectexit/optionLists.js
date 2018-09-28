import { defineMessages } from 'react-intl';

export default {
  exitReasons: {
    values: [
      'noLongerUseful',
      'notCollectionThemed',
      'deteriorated',
      'cantPreserve',
      'betterExampleExists',
      'nagpraRepatriation',
    ],
    messages: defineMessages({
      noLongerUseful: {
        id: 'option.exitReasons.noLongerUseful',
        defaultMessage: 'no longer useful to the organization purpose',
      },
      notCollectionThemed: {
        id: 'option.exitReasons.notCollectionThemed',
        defaultMessage: 'does not address collecting themes',
      },
      deteriorated: {
        id: 'option.exitReasons.deteriorated',
        defaultMessage: 'has deteriorated beyond usefulness',
      },
      cantPreserve: {
        id: 'option.exitReasons.cantPreserve',
        defaultMessage: 'can no longer be preserved',
      },
      betterExampleExists: {
        id: 'option.exitReasons.betterExampleExists',
        defaultMessage: 'Is represented by a better example',
      },
      nagpraRepatriation: {
        id: 'option.exitReasons.nagpraRepatriation',
        defaultMessage: 'NAGPRA repatriation',
      },
    }),
  },
  exitMethods: {
    values: [
      'deaccession',
      'disposal',
      'transfer',
    ],
    messages: defineMessages({
      deaccession: {
        id: 'option.exitMethods.deaccession',
        defaultMessage: 'deaccession',
      },
      disposal: {
        id: 'option.exitMethods.disposal',
        defaultMessage: 'disposal',
      },
      transfer: {
        id: 'option.exitMethods.transfer',
        defaultMessage: 'transfer',
      },
    }),
  },
};
