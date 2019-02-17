import columns from './columns';

export default () => configContext => ({
  recordTypes: {
    movement: {
      columns: columns(configContext),
    },
  },
});
