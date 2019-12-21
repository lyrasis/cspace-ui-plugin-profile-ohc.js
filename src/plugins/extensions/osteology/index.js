import fields from './fields';

export default () => (configContext) => ({
  recordTypes: {
    osteology: {
      fields: fields(configContext),
    },
  },
});
