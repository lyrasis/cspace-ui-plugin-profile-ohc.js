export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
    Cols,
    Col,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="localityGroupList" subpath="ns2:collectionobjects_anthro">
      <Field name="localityGroup">
        <Panel>
         <Cols>
            <Col>
              <Field name="fieldLocVerbatim" />
            </Col>

            <Col>
              <Field name="fieldLocPlace" />
            </Col>
          </Cols>
        </Panel>
      </Field>
    </Field>
  );
};
