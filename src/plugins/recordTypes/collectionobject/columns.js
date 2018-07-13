export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      objectName: {
        formatValue: formatRefName,
      },
    },
    narrow: {
      objectName: {
        formatValue: formatRefName,
      },
    },
  };
};
