// var cronJobQuery = require('./cronJobQuery');
// var deviceCronQuery = require('./deviceCronQuery');
// var shiftsLiveCronQuery = require('../db/pgsql/shiftsLiveCronQuery');
// var shiftsCronQuery = require('../db/pgsql/shiftsCronQuery');
// const MongoClient = require('mongodb').MongoClient;
// var _dbClient;
// var _client;
// var clusterURItoClientMap = {};
// var mongoDBClientMap = {};
// const fs = require('fs');
//     // const ca = [fs.readFileSync("D:/Prism_Dev/prism/api-bundles/workOrder/api/v1/ca-certificate.crt")];
//     const ca = [fs.readFileSync("D:/restApi_dev_2-02-2022/prism/api-bundles/workOrder/api/v1/ca-certificate.crt")];
var uri;
var schedule = require('node-schedule');
var request = require('request');
var schedule_maintable = '0 0 */3 * * *';
var schedule_5min_table = '0 */5 * * * *';
var schedule_hourly_table = '0 0 */4 * * *';
var schedule_daiytable = '0 0 */4 * * *';
// const config = require('../configuration/config');
// var io = require('socket.io-client');
// var socketclient = io.connect(config.baseURL, {reconnect: true});
// var socketIo = null;
// socketclient.on('connect', function (socket) {
//     socketIo = socketclient;
//     console.log('socket io connected');
// });
// socketclient.on('disconnect', function (socket) {
//     socketIo = null;
//     console.log('socket io connected');
// });
module.exports = {
    init: init
}
function init() {
    var auth = Buffer.from("veeralakshmanan@daacoworks.com" + ':' + "123456").toString('base64');
    var ip = "143.110.187.17:80"
    var url = "http://" + ip + "/api/v1/workOrders/?st= 1656979200000 &et= 1657126800000";
    // var url = "http://" + ip + "/api/v2/workOrders/?st=" + 1656633600000 + "&et=" + 1657065600000;


    request({
        url: url,
        method: "GET",
        json: true,
        // body: formData,
        headers: {
            Authorization: 'Basic ' + auth,
            'Content-Type': 'application/json'
        }
    }, function (error, response, body) {
        console.log("body", body);
        var workOrderIds = [];
        var workOrderIdName = {};
        for (var i = 0; i < body.length; i++) {
            var id = 412
            var data = body[i].id
            // for(var i=0;i<5;i++){
            // if (body[i].id === 506 || body[i].id === 507 || body[i].id === 508 || body[i].id === 509 || body[i].id === 510 || body[i].id === 511) {
            if (body[i].id === 412) {
                workOrderIds.push(body[i].id)
                workOrderIdName[body[i].id] = body[i].subject;
                console.log('workOrderIds ', workOrderIds);
                console.log('workOrderIdName ', workOrderIdName);
            }


        }
        upadteWorkOrder(workOrderIdName);
    })

}


function upadteWorkOrder(workOrderIdName) {
    var json = {}
    var woIds = Object.keys(workOrderIdName)

    var cncParts = [42, 43, 42]
    var roboParts = [44, 45, 46, 44]
    var pumpParts = [47, 48, 49, 47]
    var part1;
    var part2;
    var cost = Math.floor((Math.random() * 10) + 1);
    var qty1 = Math.floor((Math.random() * 5) + 1);
    var qty2 = Math.floor((Math.random() * 5) + 1);
    for (var i = 0; i < woIds.length; i++) {
        if (workOrderIdName[woIds[i]].startsWith('CNC')) {
            var cncIndex = Math.floor((Math.random() * 2) + 1);
            part1 = cncParts[cncIndex]
            part2 = cncParts[cncIndex - 1]
        } else if (workOrderIdName[woIds[i]].startsWith('Robot')) {
            var robotIndex = Math.floor((Math.random() * 3) + 1);
            part1 = roboParts[robotIndex]
            part2 = roboParts[robotIndex - 1]
        } else {
            var pumpIndex = Math.floor((Math.random() * 3) + 1);
            part1 = pumpParts[pumpIndex];
            part2 = pumpParts[pumpIndex - 1]
        }


        var userId = {};
        for (var assets = 10; assets < 12; assets++) {
            var json_1 = {};
            for (var parts = 5; parts < 7; parts++) {
                var json_2 = {}
                for (var i = 0; i < 2; i++) {
                    var Parts_json = {}
                    Parts_json['partName'] = 0;
                    Parts_json['qty'] = 2;
                    Parts_json['tc'] = 5;
                    json_2[i] = Parts_json
                }
                json_1[parts] = json_2
                // console.log("json_2",json_2)
                // console.log("json_3",json_3)
            }
            userId[assets] = json_1
            console.log("userId", userId)
        }
        // console.log("Parts_json",Parts_json)

        var hours = {};
        for (var uId = 0; uId < 2; uId++) {
            var json_1 = {};
            var json_2 = {};
            var Times = {
                "10": "50"
            }
            json_2 = Times
        }
        json_1 = json_2

        hours[uId] = json_1
        console.log("hours", hours)

        // parts[part1] = {
        //     workOrderIdName, ["uId"]: {
        //         workOrderIdName, ["assets"]: {
        //             "parts": workOrderIdName["parts"]
        //         }
        //     },
        // }
        // parts[part2] = { cost: 20, qty: qty2 }
        var formData = {}
        formData["submit"] = {
            parts,
            hours: '11:30',
            submitType: 'Update',
            status: 'Open',
            faultCode: ''
        };
        // console.log("formData", formData)
        var auth = Buffer.from("tamil-mgr@prismworks.io" + ':' + "123456").toString('base64');
        var ip = "143.110.187.17:9092"
        var url = `http://${ip}/api/v1/workOrders/${woIds[i]}`;
        // request({
        //     url: url,
        //     method: "PUT",
        //     json: true,
        //     body: formData,
        //     headers: {
        //         Authorization: 'Basic ' + auth,
        //         'Content-Type': 'application/json'
        //     }
        // }, function (error, response, body) {

        // })
    }

}
init()