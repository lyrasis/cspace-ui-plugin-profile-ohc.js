import { defineMessages } from 'react-intl';

export default {
  acquisitionMethods: {
    values: [
      'bequest',
      'curationAgreement',
      'donation',
      'fieldCollected',
      'foundInCollection',
      'gift',
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
