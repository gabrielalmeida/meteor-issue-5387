Package.describe({
  name: 'meteor:lib',
  summary: 'Meteor lib, loads everything',
  version: '0.0.1',
});

Package.onUse(function load(api) {
  var packages = [ 
    'meteor:umbrella-that-loads-ecmascript',
    'meteor:uses-ecmascript-by-implying',
  ];

  api.versionsFrom(['METEOR@1.2.0.2']);

  api.use(packages);
  api.imply(packages);
});
