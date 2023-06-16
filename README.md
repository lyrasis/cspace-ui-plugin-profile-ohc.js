# cspace-ui-plugin-profile-ohc

[![build status](https://travis-ci.org/lyrasis/cspace-ui-plugin-profile-ohc.js.svg?branch=master)](https://travis-ci.org/lyrasis/cspace-ui-plugin-profile-ohc.js)

OHC profile plugin for the CollectionSpace UI.

## Installation

### For developers

Follow these instructions to download and install the source code of the plugin.

Using git:

```
$ git clone https://github.com/lyrasis/cspace-ui-plugin-profile-ohc.js.git
$ cd cspace-ui-plugin-profile-ohc.js
$ npm install
```

To run the cspace-ui application configured with this plugin in development, using the OHC
production services API and the OHC production UI configuration:

```
$ npm run devserver --back-end=https://cspace.ohiohistory.org
```

Then open a browser to http://localhost:8080.

Alternatively, to run the cspace-ui application configured with this plugin in development, using
the UI configuration in index.html:

```
$ npm run devserver
```

By default, the configuration in index.html uses the CollectionSpace services API located at
http://localhost:8180. To run the application against CollectionSpace services located on a
different host, edit index.html, and change the `serverUrl` configuration property. Note that the
specified server must be configured to allow CORS requests from http://localhost:8080.
