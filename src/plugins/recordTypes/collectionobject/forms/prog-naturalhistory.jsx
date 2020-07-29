import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

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

        {extensions.annotation.collectionobject.form}
        {extensions.dimension.form}

        <Field name="usageGroupList">
          <Field name="usageGroup">
            <Field name="usage" />
            <Field name="usageNote" />
          </Field>
        </Field>

      </Panel>

      <Panel name="collect" collapsible collapsed>
        <Row>
          {extensions.locality.collectionobject.form.simpleform}
        </Row>
        <Row>
          <Col>
            <Field name="fieldCollectionDateGroup" />

            <Field name="fieldCollectionMethods">
              <Field name="fieldCollectionMethod" />
            </Field>

            <Field name="fieldCollectors">
              <Field name="fieldCollector" />
            </Field>
          </Col>

          <Col>
            <Field name="fieldCollectionNote" />
          </Col>
        </Row>
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
      defaultMessage: 'Natural History Programming Template',
    },
  }),
  template: template(configContext),
});
