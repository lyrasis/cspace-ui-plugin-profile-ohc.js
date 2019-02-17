import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
    formatTimestamp,
    formatWorkflowStateIcon,
    formatDate,
  } = configContext.formatHelpers;

  return {
    default: {
      workflowState: {
        flexGrow: 0,
        flexShrink: 0,
        formatValue: formatWorkflowStateIcon,
        order: 10,
        width: 32,
      },
      movementReferenceNumber: {
        messages: defineMessages({
          label: {
            id: 'column.movement.default.movementReferenceNumber',
            defaultMessage: 'Reference number',
          },
        }),
        order: 20,
        sortBy: 'movements_common:movementReferenceNumber',
        width: 250,
      },
      currentLocation: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.movement.default.currentLocation',
            defaultMessage: 'Current location',
          },
        }),
        order: 30,
        sortBy: 'movements_common:currentLocation',
        width: 380,
      },
      locationDate: {
        formatValue: formatDate,
        messages: defineMessages({
          label: {
            id: 'column.movement.default.locationDate',
            defaultMessage: 'LMI Date',
          },
        }),
        order: 40,
        sortBy: 'movements_common.locationDate',
        width: 150,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.movement.default.updatedAt',
            defaultMessage: 'Updated',
          },
        }),
        order: 50,
        sortBy: 'collectionspace_core:updatedAt',
        width: 150,
      },
    },
  };
};
