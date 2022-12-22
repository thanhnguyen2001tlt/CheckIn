const express = require('express');
var Traceroute = require('traceroute-lite');
var traceroute = new Traceroute('madiad.ddns.net');
const getWifissid = express.Router();
getWifissid.post("/getwifi", async (req, res) => {
    const { } = req.body;
    traceroute.on('hop', function(hop) {
        hop 
      });
    
      traceroute.start(function(err, hops) {
        if (!hops) {
            return res.status(400).json({
                message: "Lấy ssid Thiết Bị Không Thành Công",
                status: false,
            })
        } else {
            return res.status(200).json({
                message: "Lấy ssid Thiết Bị Thành Công",
                status: true, hops,
            })
        }
      });

});
module.exports = getWifissid;