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
        'education',
        'collection-management',
        'design',
        'ethnographic',
        'history',
        'naamcc',
        'natural-history',
        'poindexter-village',
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
          defaultMessage: 'NAGPRA',
        },
        education: {
          id: 'option.departments.education',
          defaultMessage: 'Center and Village',
        },
        'collection-management': {
          id: 'option.departments.collection-management',
          defaultMessage: 'Collection Management',
        },
        design: {
          id: 'option.departments.design',
          defaultMessage: 'Design',
        },
        ethnographic: {
          id: 'option.departments.ethnographic',
          defaultMessage: 'Ethnographic',
        },
        history: {
          id: 'option.departments.history',
          defaultMessage: 'History',
        },
        naamcc: {
          id: 'option.departments.naamcc',
          defaultMessage: 'National Afro-American Museum & Cultural Center',
        },
        'natural-history': {
          id: 'option.departments.natural-history',
          defaultMessage: 'Natural History',
        },
        'poindexter-village': {
          id: 'option.departments.poindexter-village',
          defaultMessage: 'Poindexter Village',
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
