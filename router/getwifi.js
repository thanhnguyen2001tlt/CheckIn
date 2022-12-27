const e = require('express');
const express = require('express');
const app = express();
const getWifissid = express.Router();
getWifissid.post("/getwifi", async (req, res) => {
  const { } = req.body;
  var dnsSync = require('dns-sync');
  var dns = "113.188.141.192";

  app.get('/', (req, res) => {
    // Lấy địa chỉ IP của thiết bị khách truy cập máy chủ
    var ipAddr = req.headers["x-forwarded-for"];
    if (ipAddr) {
      var list = ipAddr.split(",");
      ipAddr = list[list.length - 1];

      return res.status(200).json({
        message: "checkl",
        status: false, ipAddr,
      })


    } else {
      ipAddr = req.connection.remoteAddress;
    }

    // Trả về địa chỉ IP của thiết bị khách truy cập máy chủ
    res.send(`Địa chỉ IP của thiết bị khách truy cập là: ${ipAddr}`);
  });
  // const https = require('https');

  // https.get('https://ipinfo.io/', (response) => {
  //   let data = '';
  //   // Nhận dữ liệu từ response
  //   response.on('data', (chunk) => {
  //     data += chunk;
  //   });
  //   const http = require('http');



  //   response.on('end', () => {
  //    const ipar =JSON.parse(data).ip;
  //     if (JSON.parse(data).ip !== dns) {
  //         return res.status(400).json({
  //             message: "WFH",
  //             status: false,ipar,
  //         })
  //     } else {
  //         return res.status(200).json({
  //             message: "Cty",
  //             status: true,ipar,
  //         })
  //     }
  //   });
  //  });
});
module.exports = getWifissid;