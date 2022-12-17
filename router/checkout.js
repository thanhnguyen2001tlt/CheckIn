const express = require('express');
const checkoutRouter = express.Router();
const wifi = require('node-wifi');
const address = require('address');
const UserCheck = require("../model/checkout");
wifi.init({
    iface: null,
});


checkoutRouter.post("/checkout", async (req, res) => {
    const { ssiddb, macdb } = req.body;
    //get mac
    function getmac() {
        var mac;
        address.mac(function (err, m) {
            mac = m;
        });
        return mac;
    }
    //checkout  
    try {
        let today = new Date();
        const data = await wifi.getCurrentConnections();
        if (ssiddb === data[0].ssid && macdb === getmac()) {
            const checkPut = {
                typecheckout: "cty",
                datetime: today.toLocaleString('en-UK'),
            }
            const userc = new UserCheck(checkPut);
            userc.save((err, data) => {
                if (err) {
                    return res.status(400).json({
                        message: "check Out Không Thành Công",
                        status: false,
                    })
                } else {
                    return res.status(200).json({
                        message: "check Out Thành Công",
                        status: true,
                    })
                }
            });
        } else  {
            const checkPut = {
                typecheckout: "wfh",
                datetime: today.toLocaleString('en-UK'),
            }
            const userc = new UserCheck(checkPut);
            userc.save((err, data) => {
                if (err) {
                    return res.status(400).json({
                        message: "check Out Không Thành Công",
                        status: false,
                    })
                }else{
                    return res.status(200).json({
                        message: "check Out WFH Thành Công",
                        status: true,
                    })
                }
            });
        }
    } catch (error) {
        console.log(error);
    }

});

module.exports = checkoutRouter;