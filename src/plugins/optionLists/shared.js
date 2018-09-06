import { defineMessages } from 'react-intl';

/**
 * This plugin provides option lists that are shared by multiple record types. Option lists that
 * are used by only one record type are defined in the plugin for that record type.
 */
export default () => ({
  optionLists: {
    departments: {
      values: [
        'archaeology',
        'history',
        'natural-history',
      ],
      // I think department names are proper nouns? Capitalizing them.
      messages: defineMessages({
        archaeology: {
          id: 'option.departments.archaeology',
          defaultMessage: 'Archaeology',
        },
        history: {
          id: 'option.departments.history',
          defaultMessage: 'History',
        },
        'natural-history': {
          id: 'option.departments.natural-history',
          defaultMessage: 'Natural History',
        },
      }),
    },
  },
});
