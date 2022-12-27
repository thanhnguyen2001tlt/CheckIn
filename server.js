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


  

const PORT = process.env.PORT || 8080;
app.listen(PORT) 


