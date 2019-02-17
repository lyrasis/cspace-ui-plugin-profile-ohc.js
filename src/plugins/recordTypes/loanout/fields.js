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
      'ns2:loansout_ohc': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/loansout/domain/ohc',
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
                  id: 'field.loansout_ohc.loanStatusOHCGroup.name',
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
                    id: 'field.loansout_OHC.loanStatusOHC.name',
                    defaultMessage: 'Status',
                  },
                  fullName: {
                    id: 'field.loansout_ohc.loanStatusOHC.fullName',
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
                    id: 'field.loansout_ohc.loanStatusOHCContact.name',
                    defaultMessage: 'Contact',
                  },
                  fullName: {
                    id: 'field.loansout_ohc.loanStatusOHCContact.fullName',
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
                    id: 'field.loansout_ohc.loanStatusOHCDate.name',
                    defaultMessage: 'Date',
                  },
                  fullName: {
                    id: 'field.loansout_common.loanStatusDate.fullName',
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
                    id: 'field.loansout_ohc.loanStatusOHCNote.name',
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
