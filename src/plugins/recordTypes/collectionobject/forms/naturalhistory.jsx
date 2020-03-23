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
      <Panel name="desc" collapsible>
        <Row>
          <Col>
            <Field name="forms">
              <Field name="form" />
            </Field>
          </Col>
        </Row>

        <Panel name="bio" collapsible>
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

        <Panel name="content" collapsible collapsed>
          <Row>
            <Col>
              <Field name="contentDateGroup" />
            </Col>
          </Row>
        </Panel>

      </Panel>

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
            <Field name="namedCollection" subpath="ns2:collectionobjects_ohc" />
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

            <Field name="comments">
              <Field name="comment" />
            </Field>
          </Col>
        </Row>

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

            <Field name="fieldCollectionPlace" />
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
      id: 'form.collectionobject.naturalhistory.name',
      defaultMessage: 'Natural History Core Template',
    },
  }),
  template: template(configContext),
});
