const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const db = require("./config/key").mogoURI;
mongoose.set('strictQuery', false);
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, }).then(() => console.log("MongoDB Connected....")).catch((err) => console.log(err));
app.use("/api/check", require("./router/checkin"));
app.use("/api/check", require("./router/checkout"));
app.use("/api/check", require("./router/getmac"));
app.use("/api/check", require("./router/getwifi"));
var dnsSync = require('dns-sync');
var dns ='http://' +dnsSync.resolve('madiad.ddns.net');
console.log(dns)
const axios = require('axios');

axios.get('https://checked-api.herokuapp.com/api/check/logs', {
  headers: {
    'Authorization': 'Bearer 97dd3a86-c385-4909-b49b-33abbcee97ae'
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT) 


