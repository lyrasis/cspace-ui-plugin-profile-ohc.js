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
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="objectEntryInfo" collapsible>
        <Cols>
          <Col>
            <Field name="entryNumber" />
            <Field name="entryDate" />
            <Field name="entryReason" />

            <Field name="entryMethods">
              <Field name="entryMethod" />
            </Field>
          </Col>

          <Col>
            <Field name="returnDate" />

            <Field name="currentOwners">
              <Field name="currentOwner" />
            </Field>

            <Field name="depositorGroupList">
              <Field name="depositorGroup">
                <Field name="depositor" />
                <Field name="depositorsRequirements" />
              </Field>
            </Field>
          </Col>
        </Cols>

        <Field name="approvalGroupList">
          <Field name="approvalGroup">
            <Field name="approvalGroup" />
            <Field name="approvalIndividual" />
            <Field name="approvalStatus" />
            <Field name="approvalDate" />
            <Field name="approvalNote" />
          </Field>
        </Field>

        <Field name="entryNote" />
        <Field name="packingNote" />
      </Panel>

      <Panel name="location" collapsible collapsed>
        <Field name="currentLocationGroupList">
          <Field name="currentLocationGroup">
            <Field name="currentLocation" />
            <Field name="currentLocationFitness" />
            <Field name="currentLocationNote" />
          </Field>
        </Field>

        <Row>
          <Field name="locationDate" />
          <Field name="normalLocation" />
        </Row>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  messages: defineMessages({
    name: {
      id: 'form.intake.history.name',
      defaultMessage: 'History Template',
    },
  }),
  sortOrder: 2,
  template: template(configContext),
});
