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
function getmac() {
  var mac;
  address.mac(function (err, m) {
    mac = m;
  });
  return mac;
}
//checkin
const UserCheck = require("./model/checkin")
async function checkin(ssiddb, macdb) {
  try {
    let today = new Date();
    const data = await wifi.getCurrentConnections();
    if (ssiddb === data[0].ssid && macdb === getmac()) {
      const checkPut = {
        typecheckin: "cty",
        datetime:  today.toLocaleString('en-UK'),
      }
      const userc = new UserCheck(checkPut);
      userc.save((err, data) => {
        console.log(data)
      });
    } else if (ssiddb !== data[0].ssid) {
      const checkPut = {
        typecheckin: "wfh",
        datetime:  today.toLocaleString('en-UK'),
      }
      const userc = new UserCheck(checkPut);
      userc.save((err, data) => {
        console.log(data)
      });
    }
  } catch (error) {
    console.log(error);
  }
}
//checkout
const UserCheckOut = require("./model/checkout")
async function checkout(ssiddb, macdb) {
  try {
    let today = new Date();
    const data = await wifi.getCurrentConnections();
    if (ssiddb === data[0].ssid && macdb === getmac()) {
      const checkPut = {
        typecheckout: "cty",
        datetime: toda.toLocaleString('en-UK'),
      }
      const userc = new UserCheckOut(checkPut);
      userc.save((err, data) => {
        console.log(data)
      });
    } else if (ssiddb !== data[0].ssid) {
      const checkPut = {
        typecheckout: "wfh",
        datetime: today.toLocaleString('en-UK'),
      }
      const userc = new UserCheckOut(checkPut);
      userc.save((err, data) => {
        console.log(data)
      });
    }
  } catch (error) {
    console.log(error);
  }
}

checkin("MADIAD - LIVETRADE", "60:6d:c7:ef:cc:7")
const PORT = process.env.PORT || 8080;
app.listen(PORT) 
