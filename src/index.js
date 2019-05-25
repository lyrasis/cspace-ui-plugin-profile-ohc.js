/* global cspaceUIPluginProfileOHC */
/* The cspaceUIPluginProfileOHC global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/ohc.css';

export default () => ({
  messages,
  className: styles.common,
  prettyUrls: true,
  tenantId: '1885',
  pluginInfo: {
    cspaceUIPluginProfileOHC: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileOHC.name',
          defaultMessage: 'OHC profile',
        },
      }),
      version: cspaceUIPluginProfileOHC.packageVersion,
    },
  },
  plugins: plugins.map(plugin => plugin()),
});
