Package.describe({
  name: 'fkint:camera',
  summary: 'Photos with one function call on desktop and mobile.',
  version: '1.5.0',
  git: 'https://github.com/FKint/mobile-packages',
});

Cordova.depends({
  'cordova-plugin-camera': '4.0.3',
});

Package.onUse(function(api) {
  api.use(['templating', 'session', 'ui', 'blaze', 'less@2.0.0', 'reactive-var', 'underscore']);

  api.addFiles('photo.html');
  api.addFiles('photo.js');
  api.addFiles('camera.less', ['web.browser']);
  api.addFiles('photo-browser.js', ['web.browser']);
  api.addFiles('photo-cordova.js', ['web.cordova']);
  api.export('MeteorCamera');
});
