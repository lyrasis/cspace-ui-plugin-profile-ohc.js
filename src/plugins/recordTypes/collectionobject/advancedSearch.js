export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
    OP_RANGE,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/objectNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/responsibleDepartments/responsibleDepartment',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/collection',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/recordStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_ohc/descriptionLevel',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/objectNameList/objectNameGroup/objectName',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_ohc/categoryGroupList/categoryGroup/category',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_ohc/categoryGroupList/categoryGroup/subCategory',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/materialGroupList/materialGroup/material',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/titleGroupList/titleGroup/title',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/fieldColEventNames/fieldColEventName',
      },
      {
        op: OP_RANGE,
        path: 'ns2:collectionobjects_common/objectProductionDateGroupList/objectProductionDateGroup',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/techniqueGroupList/techniqueGroup/technique',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/objectProductionPlaceGroupList/objectProductionPlaceGroup/objectProductionPlace',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/objectProductionPeopleGroupList/objectProductionPeopleGroup/objectProductionPeople',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/objectProductionPersonGroupList/objectProductionPersonGroup/objectProductionPerson',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/objectProductionOrganizationGroupList/objectProductionOrganizationGroup/objectProductionOrganization',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/forms/form',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/editionNumber',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/styles/style',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/objectComponentGroupList/objectComponentGroup/objectComponentName',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/sex',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/phase',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/nonTextualInscriptionGroupList/nonTextualInscriptionGroup/inscriptionDescriptionInscriber',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/nonTextualInscriptionGroupList/nonTextualInscriptionGroup/inscriptionDescriptionMethod',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
