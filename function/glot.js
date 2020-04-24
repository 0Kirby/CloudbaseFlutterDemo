const got = require('got')
exports.main = async (event, context, callback) => {

    let postResponse = await got('https://run.glot.io/languages/python/latest',//可根据需要改为其他编程语言
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'//请填入您申请的glot API Token
            },
            body: JSON.stringify({
                files: [{
                    "name": "main.py",
                    "content": event.code
                }],
                stdin: event.stdin,
                command: ""
            })
        })
    return JSON.parse(postResponse.body).stdout + JSON.parse(postResponse.body).stderr +
        JSON.parse(postResponse.body).error
};
