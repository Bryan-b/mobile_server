const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.static("./"));
const server = http.createServer(app);

const io = socketIO(server);
io.on("connection", socket => {
  console.log("a user connected :D");
});

app.get('/',(req,res)=>{
  res.send('Welcome')
  console.log('hmmhmhmh');
})

server.listen(PORT, () => {
  console.log("server started and listening on port " + PORT);
});