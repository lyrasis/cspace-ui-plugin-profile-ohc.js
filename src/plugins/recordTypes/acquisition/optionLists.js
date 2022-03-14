import { defineMessages } from 'react-intl';

export default {
  acquisitionMethods: {
    values: [
      'bequest',
      'curated-on-behalf-of-federal-government',
      'curated-on-behalf-of-state-government',
      'curated-on-behalf-of-tribal-government',
      'donation',
      'fieldCollected',
      'foundInCollection',
      'loan',
      'purchase',
      'staffCurated',
      'transfer',
    ],
    messages: defineMessages({
      bequest: {
        id: 'option.acquisitionMethods.bequest',
        defaultMessage: 'bequest',
      },
      'curated-on-behalf-of-federal-government': {
        id: 'option.acquisitionMethods.curated-on-behalf-of-federal-government',
        defaultMessage: 'curated on behalf of federal government',
      },
      'curated-on-behalf-of-state-government': {
        id: 'option.acquisitionMethods.curated-on-behalf-of-state-government',
        defaultMessage: 'curated on behalf of state government',
      },
      'curated-on-behalf-of-tribal-government': {
        id: 'option.acquisitionMethods.curated-on-behalf-of-tribal-government',
        defaultMessage: 'curated on behalf of tribal government',
      },
      donation: {
        id: 'option.acquisitionMethods.donation',
        defaultMessage: 'donation',
      },
      fieldCollected: {
        id: 'option.acquisitionMethods.fieldCollected',
        defaultMessage: 'field collected',
      },
      foundInCollection: {
        id: 'option.acquisitionMethods.foundInCollection',
        defaultMessage: 'found in collection',
      },
      loan: {
        id: 'option.acquisitionMethods.loan',
        defaultMessage: 'loan - TBD',
      },
      purchase: {
        id: 'option.acquisitionMethods.purchase',
        defaultMessage: 'purchase',
      },
      staffCurated: {
        id: 'option.acquisitionMethods.staffCurated',
        defaultMessage: 'staff curated',
      },
      transfer: {
        id: 'option.acquisitionMethods.transfer',
        defaultMessage: 'transfer',
      },
    }),
  },
};
