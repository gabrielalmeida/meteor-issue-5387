Package.describe({
  name: 'meteor:uses-ecmascript-by-implying',
  summary: 'Uses ecmascript by implying from context?',
  version: '0.0.1',
});

Package.onUse(function load(api) {
  api.versionsFrom(['METEOR@1.2.0.2']);

  api.addFiles([
    'file-that-uses-es6.js'
  ], 'client');
});
