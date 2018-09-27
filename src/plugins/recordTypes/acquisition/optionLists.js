import { defineMessages } from 'react-intl';

export default {
  acquisitionMethods: {
    values: [
      'bequest',
      'donation',
      'foundInCollections',
      'purchase',
      'staffCurated',
      'staffCollected',
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
      foundInCollections: {
        id: 'option.acquisitionMethods.foundInCollections',
        defaultMessage: 'found in collections',
      },
      purchase: {
        id: 'option.acquisitionMethods.purchase',
        defaultMessage: 'purchase',
      },
      staffCurated: {
        id: 'option.acquisitionMethods.staffCurated',
        defaultMessage: 'staff curated',
      },
      staffCollected: {
        id: 'option.acquisitionMethods.staffCollected',
        defaultMessage: 'staff collected',
      },
      transfer: {
        id: 'option.acquisitionMethods.transfer',
        defaultMessage: 'transfer',
      },
    }),
  },
};
