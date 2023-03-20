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
    Field,
  } = recordComponents;

  const {
    Panel,
    Row,
  } = layoutComponents;

  return (
    <div>
      <Field name="annotationGroupList" subpath="ns2:collectionobjects_annotation">
        <Field name="annotationGroup" tabular={false}>
          <Panel>
            <Row>
              <Field name="annotationAuthor" />
              <Field name="annotationType" />
              <Field name="annotationDate" />
            </Row>

            <Row>
              <Field name="annotationNote" multiline />
            </Row>
          </Panel>
        </Field>
      </Field>
    </div>
  );
};
