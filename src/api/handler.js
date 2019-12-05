const child_process = require("child_process");
const readline = require("readline");

/****************************
 * START OF WRAPPER CODE
 ****************************/
const execPath = process.env.EXEC_PATH;

let proc = initProc();

function initProc(options) {
  options = options || {};
  const p = child_process.spawn(execPath);

  // Add your own custom handler if you want to handle the errors differently.
  p.stderr.on("data", err => {
    console.error("proc stderr: ", err);
  });

  // You might want to use ```exit``` event instead of ```close``` if you don't
  // care about the ```stdio streams``` of the subprocess.
  // https://nodejs.org/api/child_process.html#child_process_event_close
  // https://nodejs.org/api/child_process.html#child_process_event_exit
  p.on("close", function (code) {
    if (code !== 0) {
      console.error(new Error(`Process closed with code: ${code}`));
    }
    const {
      handlerProcCloseCallback
    } = proc;
    proc = null;
    if (handlerProcCloseCallback) {
      handlerProcCloseCallback(code);
    }
  });

  // This is the part that you get the result back from your Racket application
  // I prefer to receive lines back from the application for simplicity
  // so I use https://nodejs.org/api/readline.html#readline_event_line
  // but you can adapt this to use binary data as well, exactly like we did with
  // `stderr` above.
  const rl = readline.createInterface({
    input: p.stdout
  });
  rl.on("line", line => {
    const {
      handlerCallback
    } = proc;
    if (handlerCallback) {
      handlerCallback(line);
    }
  });

  return {
    p,
    rl,

    // Will be called for every **line** output from our application.
    handlerCallback: null,

    // Will be called when the application process is closed. You can use
    // this callback to restart it automatically or do something custom.
    handlerProcCloseCallback: null
  };
}

function ensureProcRuns(options) {
  if (!proc) {
    proc = initProc(options);
  }
  if (options.resetCallbacks) {
    proc.handlerCallback = null;
    proc.handlerProcCloseCallback = null;
  }
}
/**************************
 * END OF WRAPPER CODE
 **************************/

exports.app = function (event, context) {
  ensureProcRuns({
    resetCallbacks: true
  });

  // Register the handler we want for each line response!
  proc.handlerCallback = result => {
    context.done(null, {
      statusCode: 200,
      body: JSON.stringify(result)
    });
  };

  // Send the input to the Racket application
  proc.p.stdin.write(`${JSON.stringify(event)}\n`);
};