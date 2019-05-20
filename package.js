Package.describe({
  name: "darlandieterich:drunkerjs",
  summary: "Discover the effects of alcohol, see what it can do on your page.",
  version: "0.0.1",
  git: "https://github.com/darlandieterich/drunkerjs"
});

Package.onUse(function(api) {
  api.addFiles("dist/drunker.js", "client");
});
