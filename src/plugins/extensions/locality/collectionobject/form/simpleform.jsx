export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Cols,
    Col,
  } = configContext.layoutComponents;

  const {
    Field,
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
