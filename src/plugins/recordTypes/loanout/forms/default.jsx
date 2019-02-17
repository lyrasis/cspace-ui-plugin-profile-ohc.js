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
          <Field name="loanOutNumber" />
          <Field name="loanPurpose" />
        </Row>

        <InputTable name="lender">
          <Field name="lendersAuthorizer" />
          <Field name="lendersContact" />
          <Field name="lendersAuthorizationDate" />
        </InputTable>

        <InputTable name="borrower">
          <Field name="borrower" />
          <Field name="borrowersContact" />
          <Field name="borrowersAuthorizer" />
          <Field name="borrowersAuthorizationDate" />
        </InputTable>

        <Row>
          <Field name="specialConditionsOfLoan" />
          <Field name="loanOutNote" />
        </Row>

        <Field name="loanStatusOHCGroupList" subpath="ns2:loansout_ohc">
          <Field name="loanStatusOHCGroup">
            <Field name="loanStatusOHC" />
            <Field name="loanStatusOHCContact" />
            <Field name="loanStatusOHCDate" />
            <Field name="loanStatusOHCNote" />
          </Field>
        </Field>

        <Row>
          <Field name="loanOutDate" />
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
      id: 'form.loanout.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(configContext),
});
