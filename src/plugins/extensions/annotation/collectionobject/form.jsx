export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Field,
  } = configContext.recordComponents;

  const {
    Panel,
    Row,
  } = configContext.layoutComponents;

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
