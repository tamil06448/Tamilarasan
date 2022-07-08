let mqtt = require('mqtt')
let client = mqtt.connect("mqtt://broker.hivemq.com")

client.on("connect", function () {

    setInterval(function () {
        var min = 30
        var max = 40
        var tagArray = []
        for (var i = 0; i < 3; i++) {
            const timestamp = new Date().getTime();
            var random = (Math.random() * (max - min) + min).toFixed(2);
            var MyDetails = {
                "SourceName": "India",
                "TagId": "010101",
                "TagName": random,
                "Time": timestamp,
            }
            tagArray.push(MyDetails)
        }
        console.log(tagArray)
        //   console.log("MyBio",MyDetails)

        {

            client.publish("PubSub", JSON.stringify(tagArray));

        }

    }, 1000);

});
