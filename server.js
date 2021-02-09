// const http = require("http");
// const express = require("express");
// const socketIO = require("socket.io");
// const PORT = process.env.PORT || 5000;

// const app = express();
// app.use(express.static("./"));
// const server = http.createServer(app);

// const io = socketIO(server);
// io.on("connection", socket => {
//   console.log("a user connected :D");
// });

// app.get('/',(req,res)=>{
//   res.send('Welcome')
//   console.log('hmmhmhmh');
// })

// server.listen(PORT, () => {
//   console.log("server started and listening on port " + PORT);
// });

const PubNub = require('pubnub');
const uuid = "bryanbb";
const pubnub = new PubNub({
  publishKey: "pub-c-1b0b130e-3f1c-4ca1-9752-d9121639b70b",
  subscribeKey: "sub-c-342bf150-2150-11eb-bca3-12c13681665f",
  uuid: uuid
});

const publishConfig = {
  channel: "location",
  message: {
    sender: uuid,
    content: {
      name: "Bryan Ebeh",
      phone: "09066287910",
      pickUp: "NO. 16 Transamadi Industrial Layout",
      dropOff: "Opp. Genesis Fast Food, Woji Road",
      price: 700,
      paymentType: "CASH",
      locCoordLat: 4.8345395,
      locCoordLong: 7.059799399999999,
      desCoordLat: 4.9345395,
      desCoordLong: 7.0897993,
    },
  },
};

pubnub.addListener({
  message: function(message) {
    console.log(message);
  },
  presence: function(presenceEvent) {
    console.log(presenceEvent);
  }
});

pubnub.subscribe({
  channels: ["mylocation"],
  withPresence: true,
});

// setInterval(()=>{
  pubnub.publish({
    channel: "personal",
    message: {
      "sender" : "Admin"
    }
  }, function (status, response) {
    // console.log(status, response);
  });
// },10000);

pubnub.publish(publishConfig, function(status, response) {
  console.log(status, response);
});

