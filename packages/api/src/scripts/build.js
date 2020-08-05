const shell = require("shelljs");
const fs = require("fs");

// Important directories and files
const distDir = "./dist";
const srcRoot = "./src";
const app = `${srcRoot}/app.rkt`;
const handler = `${srcRoot}/handler.js`;

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Remove old Binary
shell.echo("Step 1/7: Removing old binary");
shell.exec(`rm ${distDir}/linux-application`);

// Start Docker Container
shell.echo("Step 2/7: Container Starting");
const id = shell.exec("docker run -dt racket-sls-container").stdout.trim();

// Push Application to Container
shell.echo("Step 3/7: Copying Application to Container");
shell.exec(`docker cp ${srcRoot} ${id}:/`);

// TODO find a good way to manage raco dependencies
shell.echo("Step 4/8: Installing racket dependencies");
shell.exec(`docker exec ${id} raco pkg install crypto`);

// Execute build script in the Container
shell.echo("Step 5/8: Building Application binary");
shell.exec(`docker exec ${id} raco exe --orig-exe -o ./application ${app}`);

// Pull binary from Container
shell.echo("Step 6/8: Pulling binary from Container");
shell.exec(`docker cp ${id}:/application ${distDir}/linux-application`);

// Stop the Container and remove it
shell.echo("Step 7/8: Stopping and Removing Container");
// shell.exec(`docker stop ${id}`);
// shell.exec(`docker rm ${id}`);

// Copy Lambda Handler into dist Folder
shell.echo("Step 8/8: Moving Handler into Dist Folder");
shell.exec(`cp ${handler} ${distDir}/handler.js`);
