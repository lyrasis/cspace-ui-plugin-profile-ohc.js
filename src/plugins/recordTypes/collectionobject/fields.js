import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    OptionPickerInput,
    StructuredDateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_FLOAT,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

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
      'ns2:collectionobjects_anthro': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/domain/anthro',
          },
        },
        ethnoFileCodes: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          ethnoFileCode: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_anthro.ethnoFileCode.name',
                  defaultMessage: 'Ethnographic file code',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/ethfilecode',
                },
              },
            },
          },
        },
        anthroOwnershipGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          anthroOwnershipGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_anthro.anthroOwnershipGroup.name',
                  defaultMessage: 'Previous ownership',
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
            anthroOwner: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwner.fullName',
                    defaultMessage: 'Previous owner name',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwner.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/shared',
                  },
                },
              },
            },
            anthroOwnershipAccess: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipAccess.fullName',
                    defaultMessage: 'Previous ownership access',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipAccess.name',
                    defaultMessage: 'Access',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'ownershipAccessLevels',
                  },
                },
              },
            },
            anthroOwnershipDateGroup: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipDateGroup.fullName',
                    defaultMessage: 'Previous ownership date',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            anthroOwnershipCategory: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipCategory.fullName',
                    defaultMessage: 'Previous ownership category',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipCategory.name',
                    defaultMessage: 'Category',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'ownershipCategories',
                  },
                },
              },
            },
            anthroOwnershipPlace: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipPlace.fullName',
                    defaultMessage: 'Previous ownership place',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipPlace.name',
                    defaultMessage: 'Place',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local,place/shared',
                  },
                },
              },
            },
            anthroOwnershipMethod: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipMethod.fullName',
                    defaultMessage: 'Previous ownership exchange method',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipMethod.name',
                    defaultMessage: 'Exch. meth.',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'ownershipExchangeMethods',
                  },
                },
              },
            },
            anthroOwnershipPriceCurrency: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipPriceCurrency.fullName',
                    defaultMessage: 'Previous ownership exchange price currency',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipPriceCurrency.name',
                    defaultMessage: 'Price currency',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'currency',
                  },
                },
              },
            },
            anthroOwnershipPriceAmount: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipPriceAmount.fullName',
                    defaultMessage: 'Previous ownership exchange price amount',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipPriceAmount.name',
                    defaultMessage: 'Price amount',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            anthroOwnershipNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipNote.fullName',
                    defaultMessage: 'Previous ownership note',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipNote.name',
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
        fieldLocVerbatim: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_anthro.fieldLocVerbatim.name',
                defaultMessage: 'Field collection place (verbatim)',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        ...extensions.locality.fields,
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
        namedCollection: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_ohc.namedCollection.name',
                defaultMessage: 'Named collection',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'work/local',
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
                  defaultMessage: 'Apparel sizes',
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
        namedTimePeriods: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          namedTimePeriod: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_ohc.namedTimePeriod.name',
                  defaultMessage: 'Named Time Periods',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'namedtimeperiods',
                },
              },
            },
          },
        },
        oaiSiteGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          oaiSiteGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_ohc.oaiSiteGroup.name',
                  defaultMessage: 'OAI Site Information',
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
            oaiCollectionPlace: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_ohc.oaiCollectionPlace.name',
                    defaultMessage: 'OAI Site',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local,place/shared,place/tgn',
                  },
                },
              },
            },
            oaiLocVerbatim: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_ohc.oaiLocVerbatim.name',
                    defaultMessage: 'OAI collection site (verbatim)',
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
      ...extensions.annotation.collectionobject.fields,
      ...extensions.culturalcare.collectionobject.fields,
      ...extensions.nagpra.collectionobject.fields,
      ...extensions.naturalhistory.collectionobject.fields,
    },
  };
};
