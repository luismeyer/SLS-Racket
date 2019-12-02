const shell = require('shelljs');
var watch = require('node-watch');

console.info('Compiling Files...');
shell.exec('raco exe --orig-exe -vo ./dev/application ./src/app/app.rkt');
console.info('Finished compiling. Waiting for Files to change...');

watch('./src/app', { recursive: true }, function(evt, name) {
  console.info(`Event ${evt} triggered`);
  console.info(`File ${name} changed recompiling...`);
  shell.exec('raco exe --orig-exe -vo ./dev/application ./src/app/app.rkt');
});
