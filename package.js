Package.describe({
  name: 'bmclain:xtend',
  version: '4.0.1',
  // Brief, one-line summary of the package.
  summary: 'A utility library that allows you to apppend the properties of each object in a list.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bmclain/meteor-xtend',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles([
    'immutable.js',
    'mutable.js'
  ], 'server');
  api.export('extend', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest@1.0.0');
  api.use('bmclain:xtend');
  api.addFiles('meteor/test.js');
});
