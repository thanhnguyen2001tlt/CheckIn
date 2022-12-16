const express = require("express");
const mongoose = require("mongoose");

const app = express();
const db = require("./config/key").mogoURI;
mongoose.set('strictQuery', false);
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, }).then(() => console.log("MongoDB Connected....")).catch((err) => console.log(err));;
const wifi = require('node-wifi');
const address = require('address');
wifi.init({
  iface: null,
});

//get mac
function getmac(){
  var mac;
  address.mac(function (err, m) {
      mac =m;
  });
  return mac;
}
//check
function checkin(ssiddb, macdb, wfh) {
  var check = 1;
  wifi.getCurrentConnections((error, currentConnections) => {
    var ssid = currentConnections[0].ssid;
    if (ssiddb === ssid && macdb == getmac()) {
          check = 0;
        }
      });
  return check;
}

console.log(checkin("MADIAD - LIVETRADE ", "60:6d:c7:ef:cc:a7", 1));
console.log(getmac());
const PORT = process.env.PORT || 8080;
app.listen(PORT) 
