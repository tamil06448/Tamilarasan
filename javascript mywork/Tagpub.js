let mqtt = require('mqtt')
let client = mqtt.connect("mqtt://broker.hivemq.com")

client.on("connect", function () {

    setInterval(function () {
        var tagDataArray = []
        for (var gateway = 0; gateway < 1; gateway++) {
            for (var device = 0; device < 2; device++) {
                for (var tag = 0; tag < 25; tag++) {
                    var tagData = {}
                    tagData['gateway'] = "1",
                        tagData['device'] = "2",
                        tagData['tag'] = "25",
                        tagData['tagId'] = gateway + "_" + device + "_" + tag
                    tagDataArray.push(tagData)
                }
            }
        }
        console.log(tagDataArray)

        {

            client.publish("Address", JSON.stringify(tagDataArray));

        }

    }, 1000);

});
