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
        'archaeology-nagpra',  
        'design',
        'education',
        'history',
        'natural-history',
        'registrar',
        'sites',
      ],
      // I think department names are proper nouns? Capitalizing them.
      messages: defineMessages({
        archaeology: {
          id: 'option.departments.archaeology',
          defaultMessage: 'Archaeology',
        },
        'archaeology-nagpra': {
          id: 'option.departments.archaeology-nagpra',
          defaultMessage: 'Archaeology - NAGPRA',
        },
        education: {
          id: 'option.departments.education',
          defaultMessage: 'Center and Village',
        },
        design: {
          id: 'option.departments.design',
          defaultMessage: 'Design',
        },
        history: {
          id: 'option.departments.history',
          defaultMessage: 'History',
        },
        'natural-history': {
          id: 'option.departments.natural-history',
          defaultMessage: 'Natural History',
        },
        registrar: {
          id: 'option.departments.registrar',
          defaultMessage: 'Registrar',
        },
        sites: {
          id: 'option.departments.sites',
          defaultMessage: 'Sites',
        },
      }),
    },
  },
});
