const shell = require('shelljs');

// Remove old Binary
shell.echo("Step 1/6: Removing old binary");
shell.exec("rm ./dist/linux-application");

// Start Docker Container
shell.echo("Step 2/6: Container Starting");
const id = shell.exec("docker run -dt racket-sls-container").stdout.trim();

// Push Application to Container
shell.echo("Step 3/6: Copying Application to Container");
shell.exec(`docker cp ./src/app ${id}:/app`);

// Execute build script in the Container
shell.echo("Step 4/6: Building Application binary");
shell.exec(`docker exec ${id} raco exe --orig-exe -o ./application ./app/app.rkt`);

// Pull binary from Container
shell.echo("Step 5/6: Pulling binary from Container");
shell.exec(`docker cp ${id}:/application ./dist/linux-application`);

// Stop the Container and remove it
shell.echo("Step 6/6: Stopping and Removing Container");
shell.exec(`docker stop ${id}`);
shell.exec(`docker rm ${id}`);