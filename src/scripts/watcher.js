const shell = require("shelljs");
var watch = require("node-watch");

const buildApp = () => {
  shell.exec(`cp ./src/api/handler.js ./dist/handler.js`);
  shell.exec("npm run api:build");
};

console.info("Compiling Files...");
buildApp();
console.info("Finished compiling. Waiting for Files to change...");

watch(
  "./src/api", {
    persistent: true,
    recursive: true
  },
  (evt, name) => {
    console.info(`Event ${evt} triggered`);
    console.info(`File ${name} changed recompiling...`);
    buildApp();
  }
);