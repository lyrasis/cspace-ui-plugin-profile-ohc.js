import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    TermPickerInput,
    DateInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:loansin_ohc': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/loansin/domain/ohc',
          },
        },
        loanStatusOHCGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          loanStatusOHCGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.loansin_ohc.loanStatusOHCGroup.name',
                  defaultMessage: 'Loan status',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            loanStatusOHC: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.loansin_ohc.loanStatusOHC.name',
                    defaultMessage: 'Status',
                  },
                  fullName: {
                    id: 'field.loansin_ohc.loanStatusOHC.fullName',
                    defaultMessage: 'Loan status',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'loanoutstatus',
                  },
                },
              },
            },
            loanStatusOHCContact: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.loansin_ohc.loanStatusOHCContact.name',
                    defaultMessage: 'Contact',
                  },
                  fullName: {
                    id: 'field.loansin_ohc.loanStatusOHCContact.fullName',
                    defaultMessage: 'Status contact',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local',
                  },
                },
              },
            },
            loanStatusOHCDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  name: {
                    id: 'field.loansin_ohc.loanStatusOHCDate.name',
                    defaultMessage: 'Date',
                  },
                  fullName: {
                    id: 'field.loansin_ohc.loanStatusOHCDate.fullName',
                    defaultMessage: 'Loan status date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            loanStatusOHCNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.loansin_ohc.loanStatusOHCNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
    },
  };
};
