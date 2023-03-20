export default (configContext) => {
  const {
    layoutComponents,
    lib,
    recordComponents,
  } = configContext;

  const {
    React,
  } = lib;

  const {
    Panel,
    Cols,
    Col,
  } = layoutComponents;

  const {
    Field,
  } = recordComponents;

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
