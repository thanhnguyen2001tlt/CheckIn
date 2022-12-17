const express = require('express');
const getwifiRouter = express.Router();
const address = require('address');
const Device = require("../model/device");

getwifiRouter.post("/getmac", async (req, res) => {
    const {} = req.body;
    //get mac
    function getmac() {
        var mac;
        address.mac(function (err, m) {
            mac = m;
        });
        return mac;
    }
    const devicePut = {
        mac:getmac()
      }
      const device = new Device(devicePut);
      device.save((err, data) => {
        if (err) {
            return res.status(400).json({
                message: "Lấy MAC Thiết Bị Không Thành Công",
                status: false,
            })
        } else {
            return res.status(200).json({
                message: "Lấy MAC Thiết Bị Thành Công",
                status: true,
            })
        }
    });
});
module.exports = getwifiRouter;