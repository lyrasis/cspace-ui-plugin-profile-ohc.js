import { defineMessages } from 'react-intl';

export default {
  conditionCheckReasons: {
    values: [
      'candidate for deaccession',
      'conservation',
      'consideration',
      'damaged',
      'exhibit',
      'inquiry',
      'exhibit preparation',
      'inventory/recataloging',
      'loanin',
      'loanout',
    ],
    messages: defineMessages({
      'candidate for deaccession': {
        id: 'option.conditionCheckReasons.candidate for deaccession',
        defaultMessage: 'candidate for deaccession',
      },
      conservation: {
        id: 'option.conditionCheckReasons.conservation',
        defaultMessage: 'conservation',
      },
      consideraton: {
        id: 'option.conditionCheckReasons.consideration',
        defaultMessage: 'consideration',
      },
      damaged: {
        id: 'option.conditionCheckReasons.damaged',
        defaultMessage: 'damaged',
      },
      exhibit: {
        id: 'option.conditionCheckReasons.exhibit',
        defaultMessage: 'exhibit',
      },
      'exhibit preparation': {
        id: 'option.conditionCheckReasons.exhibit preparation',
        defaultMessage: 'exhibit preparation',
      },
      inquiry: {
        id: 'option.conditionCheckReasons.inquiry',
        defaultMessage: 'inquiry',
      },
      'inventory/recataloging': {
        id: 'option.conditionCheckReasons.inventory/recataloging',
        defaultMessage: 'inventory/recataloging',
      },
      loanin: {
        id: 'option.conditionCheckReasons.loanin',
        defaultMessage: 'loan in',
      },
      loanout: {
        id: 'option.conditionCheckReasons.loanout',
        defaultMessage: 'loan out',
      },
    }),
  },
};
