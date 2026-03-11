const http = require("http");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("TW-907 server is running!");
});

server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
