const express = require('express');
const checkRouter = express.Router();
const wifi = require('node-wifi');
const address = require('address');
const UserCheck = require("../model/checkin")
wifi.init({
    iface: null,
});
checkRouter.post("/checkin", async (req, res) => {
    const { ssiddb, macdb } = req.body;
    //get mac
    function getmac() {
        var mac;
        address.mac(function (err, m) {
            mac = m;
        });
        
        return mac;
    }
    //checkin
    try {
        let today = new Date();
        const data = await wifi.getCurrentConnections();
        if (ssiddb === data[0].ssid && macdb === getmac()) {
            const checkPut = {
                typecheckin: "cty",
                datetime: today.toLocaleString('en-UK'),
            }
            const userc = new UserCheck(checkPut);
            userc.save((err, data) => {
                if (err) {
                    return res.status(400).json({
                        message: "check In Không Thành Công",
                        status: false,
                    })
                } else {
                    return res.status(200).json({
                        message: "check In Thành Công",
                        status: true,
                    })
                }
            });
        } else {
            const checkPut = {
                typecheckin: "wfh",
                datetime: today.toLocaleString('en-UK'),
            }
            const userc = new UserCheck(checkPut);
            userc.save((err, data) => {
                if (err) {
                    return res.status(400).json({
                        message: "check In Không Thành Công",
                        status: false,
                    })
                } else {
                    return res.status(200).json({
                        message: "check In WFH Thành Công",
                        status: true,
                    })
                }
            });
        }
    } catch (error) {
        console.log(error);
    }

});

module.exports = checkRouter;