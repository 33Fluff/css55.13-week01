// Load Node's built-in http module so this file can create a web server.
let myhttp = require("http");

// Create a server. The function runs once for every incoming request.
let myserver = myhttp.createServer(function(myrequest, myresponse) {
    // Print the requested path (for example "/hi") in the terminal.
    console.log(myrequest.url);

    // Hold the text that will be sent back to the browser.
    let mytext;
    // If the visitor asked for /hi, prepare a welcome message.
    if (myrequest.url === "/hi") {
        // Store the welcome text in mytext.
        mytext = "welcome to the server";
    } 
      // If the visitor asked for /bye, prepare a goodbye message.
      else if (myrequest.url === "/bye") {
        // Store the goodbye text in mytext.
        mytext = "goodbye";
      }
      // Any other path falls through to this default message.
      else {
        // Store the default text in mytext.
        mytext = "You are not welcome here";
    }

    // Start the response: status 200 means success, and the body is plain text.
    myresponse.writeHead(200, { "Content-Type": "text/plain" });
    // Send the chosen text plus a newline, then close the response.
    myresponse.end(mytext + "\n");
});

// Start listening on port 8080, and only accept connections from this computer.
myserver.listen(8080, "127.0.0.1");
