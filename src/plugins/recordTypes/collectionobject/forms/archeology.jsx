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
            <Field name="numberOfObjects" />

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
            <Field name="descriptionLevel" subpath="ns2:collectionobjects_ohc" />
            <Field name="recordStatus" />
          </Col>

          <Col>
            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>

            <Field name="computedCurrentLocation" />

            <Field name="publishToList">
              <Field name="publishTo" />
            </Field>

            <Field name="inventoryStatusList">
              <Field name="inventoryStatus" />
            </Field>
          </Col>
        </Row>

        <Field name="objectNameList">
          <Field name="objectNameGroup">
            <Field name="objectName" />
            <Field name="objectNameCurrency" />
            <Field name="objectNameLevel" />
            <Field name="objectNameSystem" />
            <Field name="objectNameType" />
            <Field name="objectNameLanguage" />
            <Field name="objectNameNote" />
          </Field>
        </Field>

        <Field name="categoryGroupList" subpath="ns2:collectionobjects_ohc">
          <Field name="categoryGroup">
            <Field name="category" />
            <Field name="subCategory" />
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

      </Panel>

      <Panel name="collect" collapsible collapsed>
        <Row>
          <Col>
            <Field name="fieldCollectionDateGroup" />

            <Field name="fieldCollectionMethods">
              <Field name="fieldCollectionMethod" />
            </Field>

            <Field name="fieldCollectionNote" />
            <Field name="fieldCollectionNumber" />
          </Col>

          <Col>
            <Field name="fieldCollectionPlace" />
            <Field name="fieldLocVerbatim" subpath="ns2:collectionobjects_anthro" />

            <Field name="fieldCollectionSources">
              <Field name="fieldCollectionSource" />
            </Field>

            <Field name="fieldCollectors">
              <Field name="fieldCollector" />
            </Field>

            <Field name="fieldColEventNames">
              <Field name="fieldColEventName" />
            </Field>
          </Col>
        </Row>
      </Panel>

      <Panel name="prod" collapsible collapsed>
        <Row>
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
      </Panel>

      <Panel name="hist" collapsible collapsed>
        <Panel name="assoc" collapsible collapsed>
          <Row>
            <Col>
              <InputTable name="assocEvent">
                <Field name="assocEventName" />
                <Field name="assocEventNameType" />
              </InputTable>

              <Field name="assocEventOrganizations">
                <Field name="assocEventOrganization" />
              </Field>

              <Field name="assocEventPeoples">
                <Field name="assocEventPeople" />
              </Field>

              <Field name="assocEventPersons">
                <Field name="assocEventPerson" />
              </Field>

              <Field name="assocEventPlaces">
                <Field name="assocEventPlace" />
              </Field>

              <Field name="assocEventNote" />

              <Field name="assocDateGroupList">
                <Field name="assocDateGroup">
                  <Field name="assocStructuredDateGroup" />
                  <Field name="assocDateType" />
                  <Field name="assocDateNote" />
                </Field>
              </Field>
            </Col>
          </Row>
        </Panel>

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

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default configContext => ({
  messages: defineMessages({
    name: {
      id: 'form.collectionobject.archeology.name',
      defaultMessage: 'Archaeology Core Template',
    },
  }),
  template: template(configContext),
});
