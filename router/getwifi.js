const express = require('express');
var detectSSid = require('detect-ssid');

const wifiscanner = require("wifiscanner");
const getWifissid = express.Router();
getWifissid.post("/getwifi", async (req, res) => {
    const { } = req.body;
 
 
//Returns appropriate instance of a wifi scanner
    const scanner = wifiscanner();
    scanner.scan((error, networks) => {
    if(error) {
       
        return res.status(400).json({
            message: "Lấy ssid Thiết Bị Không Thành Công",
            status: false,
        })
    } else {
        return res.status(200).json({
            message: "Lấy ssid Thiết Bị Thành Công",
            status: true,
            networks: networks
        })
    }
});
});
module.exports = getWifissid;