export default (configContext) => (data) => {
  const {
    deepGet,
    getPart,
  } = configContext.recordDataHelpers;

  const {
    getDisplayName,
  } = configContext.refNameHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'collectionobjects_common');

  if (!common) {
    return '';
  }

  let titleSuffix = '';

  const objectNumber = common.get('objectNumber');
  const title = deepGet(common, ['titleGroupList', 'titleGroup', 0, 'title']);
  const objectNameRefname = deepGet(common, ['objectNameList', 'objectNameGroup', 0, 'objectName']);

  if (objectNameRefname) {
    titleSuffix = getDisplayName(objectNameRefname);
  } else {
    titleSuffix = title;
  }

  return [objectNumber, titleSuffix].filter((part) => !!part).join(' - ');
};
