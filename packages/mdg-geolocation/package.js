Package.describe({
  name: "fkint:geolocation",
  summary: "Provides reactive geolocation on desktop and mobile.",
  version: "1.5.0",
  git: "https://github.com/FKint/mobile-packages"
});

Cordova.depends({
  "cordova-plugin-geolocation": "4.0.1"
});

Package.on_use(function (api) {
  api.use(["reactive-var"]);
  api.add_files(["geolocation.js"], "client");
  api.export("Geolocation", "client");
});
