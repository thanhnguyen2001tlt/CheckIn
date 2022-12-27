const e = require('express');
const express = require('express');
const getWifissid = express.Router();
getWifissid.post("/getwifi", async (req, res) => {
    const { } = req.body;
    var dnsSync = require('dns-sync');
    var dns ="113.188.141.192" ;
    const https = require('https');

    https.get('https://ipinfo.io/', (response) => {
      let data = '';
      // Nhận dữ liệu từ response
      response.on('data', (chunk) => {
        data += chunk;
      });
      const http = require('http');

      const server = http.createServer((request, response) => {
        const ips = request.connection.remoteAddress;
        if (!ip) {
                  return res.status(400).json({
                      message: "WFH",
                      status: false,ips,
                  })
              } else {
                  return res.status(200).json({
                      message: "Cty",
                      status: true,ips,
                  })
              }
        response.end();
      });
      
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
     });
});
module.exports = getWifissid;