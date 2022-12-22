const express = require('express');
var detectSSid = require('detect-ssid');

const getWifissid = express.Router();
getWifissid.post("/getwifi", async (req, res) => {
    const { } = req.body;
    detectSSid(function (error, ssidname) {
        if (!ssidname) {
            return res.status(400).json({
                message: "Lấy ssid Thiết Bị Không Thành Công",
                status: false,
            })
        } else {
            return res.status(200).json({
                message: "Lấy ssid Thiết Bị Thành Công",
                status: true, ssidname,
            })
        }
    });

});
module.exports = getWifissid;