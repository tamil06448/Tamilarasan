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
async function init() {

    var endDate = new Date();
    endDate.setHours(0,0,0,0)
    var endTime = endDate.getTime() - (1 * 24 * 60 * 60 * 1000);
    console.log("endTime ",endTime);
    var sevenDays = (7 * 24 * 60 * 60 * 1000);
    var startTime = endTime - sevenDays;
    console.log("startTime ",startTime);

    var auth = Buffer.from("demo-er1@prismworks.io" + ':' + "123456").toString('base64');
    var ip="143.110.187.17:80"
    var url = "http://" + ip + "/api/v1/workOrders?st=" + startTime + "&et=" + endTime;
    var faultworkorder = []
    var allworkorder = []
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
            console.log('body ',body.length);
            var workOrderIds = [];
            var workOrderIdName = {};
            var element = {};
            for(var i=0;i<body.length;i++){
                console.log("body[i]",body[i])                
                if(body[i].category=="Fault"){
                    workOrderIds.push(body[i].id)
                    workOrderIdName[body[i].id] = body[i].subject;
                    faultworkorder.push(body[i])
                }
                allworkorder.push(body[i])
            }
            updateWorkOrder(workOrderIdName);
            // updateWOTransition(faultworkorder);
    });              
}

function updateWorkOrder(workOrderIdName){
    console.log(workOrderIdName)
    var woIds = Object.keys(workOrderIdName)
    var statusRandom = Math.floor((Math.random() * 2) + 1 );
    var status = ["Open","In Progress","Completed"]
 
     var cncParts = [42,43,42]
     var roboParts = [44,45,46,44]
     var pumpParts = [47,48,49,47]
     var parts = {}
     var part1;
     var part2;
     var qty1 = Math.floor((Math.random() * 5) + 1 );
     var qty2 = Math.floor((Math.random() * 5) + 1 );
     woIds.forEach((element,index)=>{
         // for(var i=0;i<woIds.length;){
             // 
                     // console.log("arr j ",element)
                     if(workOrderIdName[element].startsWith('CNC')){
                         var cncIndex = Math.floor((Math.random() * 2) + 1 );
                         part1 = cncParts[cncIndex]
                         part2 = cncParts[cncIndex-1]
                     } else if(workOrderIdName[element].startsWith('Robot')){
                         var robotIndex = Math.floor((Math.random() * 3) + 1 );
                         part1 = roboParts[robotIndex]
                         part2 = roboParts[robotIndex-1]
                     } else {
                         var pumpIndex = Math.floor((Math.random() * 3) + 1 );
                         part1 = pumpParts[pumpIndex];
                         part2 = pumpParts[pumpIndex-1]
                     }
                     parts[part1] = {cost:10,qty:qty1}
                     parts[part2] = {cost:20,qty:qty2}
                 var formData = {}
                 formData["submit"] = { parts,
                 hours: '11:30',
                 submitType: 'Update',
                 status: status[statusRandom],
                 faultCode: '' } ;
                 var auth = Buffer.from("veera@gmail.com" + ':' + "123456").toString('base64');
                 var ip="143.110.187.17:80"
                 var url = `http://${ip}/api/v1/workOrders/${element}`;
                 request({
                     url: url,
                     method: "PUT",
                     json: true,
                     body: formData,
                     headers: {
                         Authorization: 'Basic ' + auth,
                         'Content-Type': 'application/json'
                     }
                     }, function (error, response, body) {
                         console.log(error);
                         console.log(response);
                         console.log(body);
                     /*    console.log("i   --",element)
                         var due = 1644997744000
                         for(j=0;j<status.length;j++){
                             // var formData1 = {}"
                              if (status[j] != "Open") {
                                 var b = new Date(due)
                                 var c = b.setHours(0,0,0,0)
                                 var a = c+(60*60*24*1000)
                                 var fromTime = due
                                 var toTime = a
                                 fromTime = new Date(fromTime)
                                 toTime = new Date(toTime)
                                 var random = Math.random()
                                 console.log("random",random)
                                 // console.log("fromTime",fromTime)
                                 // console.log("fromTime",toTime)
                                 fromTime = fromTime.getTime();
                                 toTime = toTime.getTime();
                                 var randomTime = fromTime + Math.random() * (toTime - fromTime)
                                 // console.log("getTime",fromTime + Math.random() * (toTime - fromTime))
                                 due = Math.round(randomTime)
                                }
                                 else {
                                     var randomTime = due
                                }
                             //    let Math = "randomTime";
                                 let result = Math.round(35.5)
                                 console.log("result",result)
                             var formData1={
                                 "workOrderId":element,
                                 "status":status[j],
                                 "due": due
                             }
                             // formData1["status"]=status[i]
                             console.log("status",formData1)
                             console.log("status1",element)
                             console.log("workOrderId",woIds)
                             var url = "http://"+ip+"/api/v1/transition/demo";
                             request({
                                 url: url,
                                 method: "POST",
                                 json: true,
                                 body: formData1,
                                 headers: {
                                     Authorization: 'Basic ' + auth,
                                     'Content-Type': 'application/json'
                                 }
                             }, function (error, response, body) {
                           
                                console.log("error",error) 
                             })
                         }
                         
                     //   formData["status"]="In progress"
             
                     */ })
     })
     
 }
 
    // updateWOTransition(faultworkorder);
 function updateWOTransition(faultworkorder){
    var status = ["Open","In progress","Completed"]
    for(var i=0;i<faultworkorder.length;i++){
        workOrder = faultworkorder[i]
        // console.log("faultworkorder[i]",faultworkorder[i])
        due = workOrder.due  
        console.log('workOrder due ',due);
        for(j=0;j<status.length;j++){
                             if (status[j] != "Open") {
                                var b = new Date(due)
                                var c = b.setHours(0,0,0,0)
                                var a = c+(60*60*24*1000)
                                var starttime = due
                                var endtime = a
                                starttime = new Date(starttime)
                                endtime = new Date(endtime)
                                var random = Math.random()
                                console.log("random",random)
                                starttime = starttime.getTime();
                                endtime = endtime.getTime();
                                var randomTime = starttime + Math.random() * (endtime - starttime)
                                // due = Math.round(randomTime)
                               }
                                else {
                                    var randomTime = due
                                    console.log("randomTime",randomTime)
                               }
                            //    let Math = "randomTime";
                            // due = Math.round(d.getTime());
                            // console.log("getTime",d.getTime)
                                let result = Math.round(35.5)
                                console.log("result",result)
                            var formData1={
                                "workOrderId":element,
                                "status":status[j],
                                "due": randomTime
                            }
                            // formData1["status"]=status[i]
                            console.log("status",formData1)
                            console.log("status1",element)
                            // console.log("workOrderId",woIds)
                            var url = "http://"+ip+"/api/v1/transition/demo";
                            request({
                                url: url,
                                method: "POST",
                                json: true,
                                body: formData1,
                                headers: {
                                    Authorization: 'Basic ' + auth,
                                    'Content-Type': 'application/json'
                                }
                            }, function (error, response, body) {
                          
                               console.log("error",error) 
                            })
                        }

    }
     
 }
function init2()
{
    // let endDate = new Date()


    // endTime = endDate.getTime();
    // console.log("endTime",endTime)
    // let ms_for_7_days = 1645036200000;
    // let startTime = endTime - (ms_for_7_days)
    // var Time = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    //                                 console.log("Time",Time)
                                    var endDate = new Date();
                                    var Today_Morning = endDate.setHours(0,0,0,0)
                                    console.log("Today_Morning",Today_Morning)
                                    var endTime = endDate.getTime();
                                    console.log(endTime);
                                    var sevenDays = (7 * 24 * 60 * 60 * 1000);
                                    var startTime = endTime - sevenDays;
                                    console.log("startTime ",startTime);
                                    
                                    
    var auth = Buffer.from("veera@gmail.com" + ':' + "123456").toString('base64');
    var ip="143.110.187.17:80"
    var url = "http://" + ip + "/api/v1/workOrders?st=" + startTime + "&et=" + endTime;
    var faultworkorder = []
    var allworkorder = []
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
            console.log('body ',body.length);
            var workOrderIds = [];
            var workOrderIdName = {};
            var element = {};
            for(var i=0;i<body.length;i++){
                console.log("body[i]",body[i])
                // for(var i=0;i<5;i++){
                    // if(body[i].id===506||body[i].id===507||body[i].id===508||body[i].id===509||body[i].id===510||body[i].id===511){
                         if(body[i].category=="Fault"){
                            workOrderIds.push(body[i].id)
                            workOrderIdName[body[i].id] = body[i].subject;
                        faultworkorder.push(body[i])
                        }
                        allworkorder.push(body[i])
                // }
                 
            }
             var due = 1645602426000
            var status = ["Open","In progress","Completed"]
            for(var i=0;i<faultworkorder.length;i++){
                workOrder = faultworkorder[i]
                // console.log("faultworkorder[i]",faultworkorder[i])
                due = workOrder.due  
                console.log('workOrder due ',due);
                for(j=0;j<status.length;j++){
                                     if (status[j] != "Open") {
                                        var b = new Date(due)
                                        var c = b.setHours(0,0,0,0)
                                        var a = c+(60*60*24*1000)
                                        var starttime = due
                                        var endtime = a
                                        starttime = new Date(starttime)
                                        endtime = new Date(endtime)
                                        var random = Math.random()
                                        console.log("random",random)
                                        starttime = starttime.getTime();
                                        endtime = endtime.getTime();
                                        var randomTime = starttime + Math.random() * (endtime - starttime)
                                        // due = Math.round(randomTime)
                                       }
                                        else {
                                            var randomTime = due
                                            console.log("randomTime",randomTime)
                                       }
                                    //    let Math = "randomTime";
                                    // due = Math.round(d.getTime());
                                    // console.log("getTime",d.getTime)
                                        let result = Math.round(35.5)
                                        console.log("result",result)
                                    var formData1={
                                        "workOrderId":element,
                                        "status":status[j],
                                        "due": randomTime
                                    }
                                    // formData1["status"]=status[i]
                                    console.log("status",formData1)
                                    console.log("status1",element)
                                    // console.log("workOrderId",woIds)
        //                             var url = "http://"+ip+"/api/v1/transition/demo";
        //                             request({
        //                                 url: url,
        //                                 method: "POST",
        //                                 json: true,
        //                                 body: formData1,
        //                                 headers: {
        //                                     Authorization: 'Basic ' + auth,
        //                                     'Content-Type': 'application/json'
        //                                 }
        //                             }, function (error, response, body) {
                                  
        //                                console.log("error",error) 
        //                             })
        //                         }

        //     }
        //     // var due = 1644997744000
        //     //             var status = ["Open","In progress","Completed"]
        //     //             for(j=0;j<status.length;j++){
        //     //                  if (status[j] != "Open") {
        //     //                     var b = new Date(due)
        //     //                     var c = b.setHours(0,0,0,0)
        //     //                     var a = c+(60*60*24*1000)
        //     //                     var fromTime = due
        //     //                     var toTime = a
        //     //                     fromTime = new Date(fromTime)
        //     //                     toTime = new Date(toTime)
        //     //                     var random = Math.random()
        //     //                     console.log("random",random)
        //     //                     fromTime = fromTime.getTime();
        //     //                     toTime = toTime.getTime();
        //     //                     var randomTime = fromTime + Math.random() * (toTime - fromTime)
        //     //                     due = Math.round(randomTime)
        //     //                    }
        //     //                     else {
        //     //                         var randomTime = due
        //     //                    }
        //     //                 //    let Math = "randomTime";
        //     //                     let result = Math.round(35.5)
        //     //                     console.log("result",result)
        //     //                 var formData1={
        //     //                     "workOrderId":element,
        //     //                     "status":status[j],
        //     //                     "due": due
        //     //                 }
        //     //                 // formData1["status"]=status[i]
        //     //                 console.log("status",formData1)
        //     //                 console.log("status1",element)
        //     //                 console.log("workOrderId",woIds)
        //     //                 var url = "http://"+ip+"/api/v1/transition/demo";
        //     //                 request({
        //     //                     url: url,
        //     //                     method: "POST",
        //     //                     json: true,
        //     //                     body: formData1,
        //     //                     headers: {
        //     //                         Authorization: 'Basic ' + auth,
        //     //                         'Content-Type': 'application/json'
        //     //                     }
        //     //                 }, function (error, response, body) {
                          
        //     //                    console.log("error",error) 
        //     //                 })
        //     //             }
        //     console.log("faultworkorder",faultworkorder)
        //     console.log("allworkorder",allworkorder)
        //     // console.log('workOrderIds ',workOrderIds);
        //     console.log('workOrderIdName ',workOrderIdName);
        // //     updateWorkOrder(workOrderIdName);
         })

}

