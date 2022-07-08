let mqtt = require('mqtt')
let client = mqtt.connect("mqtt://broker.hivemq.com")

client.on("connect", function () {

    setInterval(function () {
        var tagDataArray = []
        var sourceNames = ['ModbusBus1', 'ModbusBus2', 'ModbusBus3', 'ModbusBus4', 'ModbusBus5', 'ModbusBus6', 'ModbusBus7', 'ModbusBus8', 'ModbusBus9', 'ModbusBus10', 'ModbusBus11', 'ModbusBus12', 'ModbusBus13', 'ModbusBus14', 'ModbusBus14']
        // var tagNames = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6']
        var alias_names = ['Temperature', 'Reactive_Power', 'Power_Factor', 'Voltage', 'Active_Power', 'Humidity', 'tag2', 'testing']

        for (var sourceId = 1; sourceId < 2; sourceId++) {
            sourceNames.push(sourceId)
            for (var tagId = 1; tagId <= 6; tagId++) {
                alias_names.push(tagId)
                var tagData = {}

                tagData['sourceName'] = sourceNames[sourceId],
                    tagData['sourceId'] = sourceId,
                    tagData['tagName'] = alias_names[tagId],
                    tagData['gateway_id'] = 48,
                    tagData['dataTypeid'] = 3,
                    tagData['tagid'] = tagId,
                    tagDataArray.push(tagData)
            }
        }
        for (var sourceId = 14; sourceId < 15; sourceId++) {
            sourceNames.push(sourceId)
            for (var tagId = 0; tagId <= 1; tagId++) {
                alias_names.push(tagId)
                var tagData = {}

                tagData['sourceName'] = sourceNames[sourceId],
                    tagData['sourceId'] = sourceId,
                    tagData['tagName'] = alias_names[tagId],
                    tagData['gateway_id'] = 48,
                    tagData['dataTypeid'] = 3,
                    tagData['tagid'] = tagId,
                    tagDataArray.push(tagData)
            }
        }

        console.log(tagDataArray)

        {

            client.publish("6828dd1a-854e-4687-ad95-0c007c2249cd", JSON.stringify(tagDataArray));

        }

    }, 1000);

});
