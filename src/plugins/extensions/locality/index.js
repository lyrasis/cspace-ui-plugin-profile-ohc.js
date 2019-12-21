import collectionobject from './collectionobject';

export default () => (configContext) => ({
  extensions: {
    locality: {
      collectionobject: collectionobject(configContext),
    },
  },
});
