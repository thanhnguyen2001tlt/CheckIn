const express = require('express');
const getWifissid = express.Router();
getWifissid.post("/getwifi", async (req, res) => {
    const {} = req.body;
    //get mac
    function getssid() {
        var ssid = null;
        
        return ssid;
    }
    if (getssid()===null) {
        return res.status(400).json({
            message: "Lấy ssid Thiết Bị Không Thành Công",
            status: false,
        })
    } else {
        return res.status(200).json({
            message: "Lấy ssid Thiết Bị Thành Công",
            status: true,
        })
    }
});
module.exports = getWifissid;