import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Row>
          <Field name="loanInNumber" />
          <Field name="loanPurpose" />
        </Row>

        <Field name="loanStatusOHCGroupList" subpath="ns2:loansin_ohc">
          <Field name="loanStatusOHCGroup">
            <Field name="loanStatusOHC" />
            <Field name="loanStatusOHCContact" />
            <Field name="loanStatusOHCDate" />
            <Field name="loanStatusOHCNote" />
          </Field>
        </Field>

        <Field name="lenderGroupList">
          <Field name="lenderGroup">
            <Field name="lender" />
            <Field name="lendersContact" />
            <Field name="lendersAuthorizer" />
            <Field name="lendersAuthorizationDate" />
          </Field>
        </Field>

        <InputTable name="borrower">
          <Field name="borrowersContact" />
          <Field name="borrowersAuthorizer" />
          <Field name="borrowersAuthorizationDate" />
        </InputTable>

        <Row>
          <Field name="loanInConditions" />
          <Field name="loanInNote" />
        </Row>

        <Row>
          <Field name="loanInDate" />
          <Field name="loanReturnDate" />
          <Field name="loanRenewalApplicationDate" />
        </Row>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  messages: defineMessages({
    name: {
      id: 'form.loanin.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(configContext),
});
