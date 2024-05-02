import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:collectionobjects_common': {
        objectNameList: {
          objectNameGroup: {
            objectName: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/nomenclature',
                  },
                },
              },
            },
            objectNameLevel: {
              [config]: {
                view: {
                  props: {
                    source: 'ohcNameLevels',
                  },
                },
              },
            },
          },
        },
        materialGroupList: {
          materialGroup: {
            material: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/material',
                  },
                },
              },
            },
          },
        },
        contentConcepts: {
          contentConcept: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/associated',
                },
              },
            },
          },
        },
        assocPeopleGroupList: {
          assocPeopleGroup: {
            assocPeople: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/ethculture',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:collectionobjects_ohc': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/domain/ohc',
          },
        },
        descriptionLevel: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_ohc.descriptionLevel.name',
                defaultMessage: 'Description level',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'descriptionlevel',
              },
            },
          },
        },
        majorTaxon: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_ohc.majorTaxon.name',
                defaultMessage: 'Major taxon',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'majortaxon',
              },
            },
          },
        },
        categoryGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          categoryGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_ohc.categoryGroup.name',
                  defaultMessage: 'Category and subcategory',
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
            category: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_ohc.category.name',
                    defaultMessage: 'Category',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/nomenclature',
                  },
                },
              },
            },
            subCategory: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_ohc.subCategory.name',
                    defaultMessage: 'Subcategory',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/nomenclature',
                  },
                },
              },
            },
          },
        },
        apparelSizes: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          apparelSize: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_ohc.apparelSize.name',
                  defaultMessage: 'Apparel size',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'apparelsizes',
                },
              },
            },
          },
        },
      },
    },
  };
};
