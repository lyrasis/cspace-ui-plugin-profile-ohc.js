export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:osteology_common': {
        inventoryAnalyst: {
          [config]: {
            required: false,
          },
        },
        inventoryDate: {
          [config]: {
            required: false,
          },
        },
      },
    },
  };
};
