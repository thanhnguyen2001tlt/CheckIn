const express = require("express");
const mongoose = require("mongoose");

const app = express();
const db = require("./config/key").mogoURI;
mongoose.set('strictQuery', false);
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, }).then(() => console.log("MongoDB Connected....")).catch((err) => console.log(err));;
const wifi = require('node-wifi');
const address = require('address');
const { mac } = require("address");
wifi.init({
  iface: null,
});
var check = 1;
var ssiddb = "MADIAD - LIVETRADE";
var macdb = "60:6d:c7:ef:cc:a7";
var wfh = 1;
wifi.getCurrentConnections((error, currentConnections) => {
  var ssid = currentConnections[0].ssid;
  if (ssiddb === ssid) {
    address.mac(function (err, mac) {
        if(mac === macdb){
          check = 0;
        }
    });
  } else if(wfh == 0) {
    check = 0;
  }
  console.log(check);
});
const PORT = process.env.PORT || 8080;
app.listen(PORT) 
