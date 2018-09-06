export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Field,
  } = configContext.recordComponents;

  const {
    Row,
  } = configContext.layoutComponents;

  return (
    <div>
      <Field name="annotationGroupList" subpath="ns2:collectionobjects_annotation">
        <Field name="annotationGroup">
          <Row>
            <Field name="annotationAuthor" />
            <Field name="annotationType" />
            <Field name="annotationDate" />
          </Row>
          <Row>
            <Field name="annotationNote" />
          </Row>
        </Field>
      </Field>
    </div>

  );
};
