import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    CompoundInput,
  } = configContext.inputComponents;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="id" collapsible>
        <Row>
          <Col>
            <Field name="objectNumber" />

            <Field name="otherNumberList">
              <Field name="otherNumber">
                <Field name="numberValue" />
                <Field name="numberType" />
              </Field>
            </Field>

            <Field name="responsibleDepartments">
              <Field name="responsibleDepartment" />
            </Field>

            <Field name="collection" />

            <Field name="namedCollections">
              <Field name="namedCollection" />
            </Field>

            <Field name="descriptionLevel" subpath="ns2:collectionobjects_ohc" />
            <Field name="recordStatus" />
          </Col>

          <Col>
            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>

            <Field name="computedCurrentLocation" />

            <Field name="ethnoFileCodes" subpath="ns2:collectionobjects_anthro">
              <Field name="ethnoFileCode" />
            </Field>

            <Field name="publishToList">
              <Field name="publishTo" />
            </Field>

            <Field name="inventoryStatusList">
              <Field name="inventoryStatus" />
            </Field>

            <Field name="comments">
              <Field name="comment" />
            </Field>
          </Col>
        </Row>

        <Field name="objectCategoryGroupList" subpath="ns2:collectionobjects_objectcategory_extension">
          <Field name="objectCategoryGroup">
            <Field name="category" />
            <Field name="categoryCount" />
            <Field name="categoryCountUnit" />
            <Field name="categoryNote" />
          </Field>
        </Field>

        <Field name="objectNameList">
          <Field name="objectNameGroup">
            <Field name="objectName" />
            <Field name="objectNameCurrency" />
            <Field name="objectNameLevel" />
            <Field name="objectNameType" />
            <Field name="objectNameLanguage" />
            <Field name="objectNameNote" />
          </Field>
        </Field>

        <Field name="objectCountGroupList">
          <Field name="objectCountGroup">
            <Field name="objectCount" />
            <Field name="objectCountUnit" />
            <Field name="objectCountType" />
            <Field name="objectCountCountedBy" />
            <Field name="objectCountDate" />
            <Field name="objectCountNote" />
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="assocPeopleGroupList">
              <Field name="assocPeopleGroup">
                <Field name="assocPeople" />
                <Field name="assocPeopleType" />
                <Field name="assocPeopleNote" />
              </Field>
            </Field>
          </Col>
        </Cols>

        {extensions.annotation.collectionobject.form}
        {extensions.dimension.form}

        <Field name="materialGroupList">
          <Field name="materialGroup">
            <Field name="material" />
            <Field name="materialComponent" />
            <Field name="materialComponentNote" />
            <Field name="materialName" />
            <Field name="materialSource" />
          </Field>
        </Field>

      </Panel>

      <Panel name="collect" collapsible collapsed>
        <Row>
          <Col>
            <Field name="fieldCollectionSites">
              <Field name="fieldCollectionSite" />
            </Field>

            <Field name="fieldCollectionDateGroup" />

            <Field name="fieldCollectionMethods">
              <Field name="fieldCollectionMethod" />
            </Field>

            <Field name="fieldCollectionPlaces">
              <Field name="fieldCollectionPlace" />
            </Field>

            <Field name="fieldLocVerbatim" subpath="ns2:collectionobjects_anthro" />

            <Field name="fieldCollectionSources">
              <Field name="fieldCollectionSource" />
            </Field>

            <Field name="fieldCollectors">
              <Field name="fieldCollector" />
            </Field>
          </Col>

          <Col>
            <Field name="fieldCollectionNumber" />

            <Field name="fieldColEventNames">
              <Field name="fieldColEventName" />
            </Field>

            <Field name="fieldCollectionFeature" />
            <Field name="fieldCollectionNote" />
          </Col>
        </Row>
      </Panel>

      <Panel name="prod" collapsible collapsed>
        <Row>
          <Col>
            <Field name="objectProductionDateGroupList">
              <Field name="objectProductionDateGroup" />
            </Field>

            <Field name="objectProductionEras">
              <Field name="objectProductionEra" />
            </Field>
          </Col>
          <Col>
            <Field name="objectProductionPeopleGroupList">
              <Field name="objectProductionPeopleGroup">
                <Field name="objectProductionPeople" />
                <Field name="objectProductionPeopleRole" />
              </Field>
            </Field>

            <Field name="objectProductionPersonGroupList">
              <Field name="objectProductionPersonGroup">
                <Field name="objectProductionPerson" />
                <Field name="objectProductionPersonRole" />
              </Field>
            </Field>

            <Field name="objectProductionOrganizationGroupList">
              <Field name="objectProductionOrganizationGroup">
                <Field name="objectProductionOrganization" />
                <Field name="objectProductionOrganizationRole" />
              </Field>
            </Field>

            <Field name="objectProductionNote" />
          </Col>
        </Row>
      </Panel>

      {extensions.nagpra.collectionobject.form}
      {extensions.culturalcare.collectionobject.form}

      <Panel name="desc" collapsible collapsed>
        <Row>
          <Col>
            <Field name="colors">
              <Field name="color" />
            </Field>
          </Col>
        </Row>

        <Panel name="content" collapsible collapsed>
          <Row>
            <Col>
              <Field name="contentConcepts">
                <Field name="contentConcept" />
              </Field>

              <Field name="contentDateGroup" />
            </Col>
          </Row>
        </Panel>

        <Panel name="bio" collapsible collapsed>
          <Cols>
            <Col>
              <Row>
                <Field name="sex" />
                <Field name="phase" />
              </Row>
              <Field name="majorTaxon" subpath="ns2:collectionobjects_ohc" />
            </Col>

            <Col>
              <InputTable name="age">
                <Field name="ageQualifier" />
                <Field name="age" />
                <Field name="ageUnit" />
              </InputTable>
            </Col>
          </Cols>

          {extensions.naturalhistory.collectionobject.form.taxonomicIdentGroupList}
        </Panel>
      </Panel>

      <Panel name="hist" collapsible collapsed>

        <Field name="objectHistoryNote" />

        <Field name="anthroOwnershipGroupList" subpath="ns2:collectionobjects_anthro">
          <Field name="anthroOwnershipGroup">
            <Field name="anthroOwner" />
            <Field name="anthroOwnershipDateGroup" />
            <Field name="anthroOwnershipCategory" />
            <Field name="anthroOwnershipPlace" />
            <Field name="anthroOwnershipNote" />
          </Field>
        </Field>
      </Panel>

      <Panel name="locality" collapsible collapsed>
        <CompoundInput subpath="ns2:collectionobjects_anthro">
          {extensions.locality.form}
        </CompoundInput>
      </Panel>

      <Panel name="reference" collapsible collapsed>
        <Field name="referenceGroupList">
          <Field name="referenceGroup">
            <Field name="reference" />
            <Field name="referenceNote" />
          </Field>
        </Field>

        <Field name="publishedRelatedLinkGroupList">
          <Field name="publishedRelatedLinkGroup">
            <Field name="relatedLink" />
            <Field name="descriptiveTitle" />
          </Field>
        </Field>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  messages: defineMessages({
    name: {
      id: 'form.collectionobject.archeology.name',
      defaultMessage: 'Archaeology Child Template',
    },
  }),
  template: template(configContext),
});
