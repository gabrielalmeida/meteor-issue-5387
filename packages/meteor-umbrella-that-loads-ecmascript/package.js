Package.describe({
  name: 'meteor:umbrella-that-loads-ecmascript',
  summary: 'Meteor Test',
  version: '0.0.1',
});

Package.onUse(function load(api) {
  var packages = [ 
    'ecmascript'
  ];

  api.versionsFrom(['METEOR@1.2.0.2']);

  api.use(packages);
  api.imply(packages);
});
