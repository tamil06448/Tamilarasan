let mqtt = require('mqtt');
let client = mqtt.connect("mqtt://broker.hivemq.com");

client.on('message',function(topic,message){
  console.log(JSON.parse(message));
})

client.on('connect',function(){
  client.subscribe("6828dd1a-854e-4687-ad95-0c007c2249cd");
  console.log("Sended");
})