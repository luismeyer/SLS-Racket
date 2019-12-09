console.log("Starting Watcher");

const shell = require("shelljs");
const watch = require("node-watch");
const path = require("path");

const buildApp = () => {
  console.info("Compiling Files...");
  shell.exec(`cp ./src/handler.js ./dist/handler.js`);
  shell.exec("npm run build-dev");
  console.info("Finished compiling. Waiting for filechanges...\n");
};

buildApp();
watch(
  "./src",
  {
    persistent: true,
    recursive: true,
    filter: /\.rkt$/
  },
  (evt, name) => {
    console.info(`Event ${evt} triggered`);
    console.info(`File ${name} changed recompiling...`);
    buildApp();
  }
);
