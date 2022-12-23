const e = require('express');
const express = require('express');
const getWifissid = express.Router();
getWifissid.post("/getwifi", async (req, res) => {
    const { } = req.body;
    var dnsSync = require('dns-sync');
    var dns ='http://' +dnsSync.resolve('madiad.ddns.net');  
    const urlStatusCode = require('url-status-code')
    const url = dns; 
    urlStatusCode(url, (error, statusCode) => {
        if (error) {
            return res.status(400).json({
                message: "WFH",
                status: false,
            })
        } else {
            return res.status(200).json({
                message: "Cty",
                status: true, hops,
            })
        }
    })

});
module.exports = getWifissid;