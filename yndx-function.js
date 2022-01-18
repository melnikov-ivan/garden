const fetch = require("node-fetch");

module.exports.handler = async function (event, context) {
    const iamToken = context.token.access_token;
    // console.log(context);

    let data = JSON.parse(event.body)
    //console.log(body);
    let json = {
    "metrics": [
        {
            "name": "soil.moisture",
            "labels": {
                "pot": "1"
            },
            "value": data.pot1
        },
        {
            "name": "soil.moisture",
            "labels": {
                "pot": "2"
            },
            "value": data.pot2
        },
        {
            "name": "soil.moisture",
            "labels": {
                "pot": "3"
            },
            "value": data.pot3
        },
        {
            "name": "soil.moisture",
            "labels": {
                "pot": "4"
            },
            "value": data.pot4
        }
    ]
    };
    //console.log(json);

    const response = await fetch('https://monitoring.api.cloud.yandex.net/monitoring/v2/data/write?service=custom&folderId=' + folderId, {
        method: 'post',
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + iamToken
        }
    });
    const body = await response.text();
    
    return {
        code: response.status,
        body: body
    };
};
