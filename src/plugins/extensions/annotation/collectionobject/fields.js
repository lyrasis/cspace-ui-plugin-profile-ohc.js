export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    'ns2:collectionobjects_annotation': {
      annotationGroupList: {
        annotationGroup: {
          [config]: {
            view: {
              props: {
                tabular: false,
              },
            },
          },
          annotationNote: {
            [config]: {
              view: {
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
      },
    },
  };
};
