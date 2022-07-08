let mqtt = require('mqtt')
let client = mqtt.connect("mqtt://broker.hivemq.com")

client.on("connect", function () {

    setInterval(function () {
        var min = 0
        var max = 1
        var tagDataArray = []
        var sourceNames = ['ModbusBus Device1', 'ModbusBus Device2', 'ModbusBus Device3', 'ModbusBus Device4', 'ModbusBus Device5', 'ModbusBus Device6']
        var tagNames = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6']

        for (var sourceId = 1; sourceId <= 6; sourceId++) {
            sourceNames.push(sourceId)
            for (var tagId = 1; tagId <= 6; tagId++) {
                tagNames.push(tagId)
                const timestamp = new Date().getTime();
                var random = (Math.random() * (max - min) + min).toFixed(2);
                random = Math.round(random)
                var data;
                if(random==0){
                    data = false
                    } else if (random==1){
                        data = true
                    }
                var tagData = {}

                tagData['sourceName'] = sourceNames[sourceId],
                    tagData['sourceId'] = sourceId,
                    tagData['tagNames'] = tagNames[tagId],
                    tagData['tagId'] = random,
                    tagData['value'] = data,
                    tagData['time'] = timestamp,
                    tagDataArray.push(tagData)
            }
        }
        console.log(tagDataArray)

        {

            client.publish("Tagss", JSON.stringify(tagDataArray));

        }

    }, 1000);

});
