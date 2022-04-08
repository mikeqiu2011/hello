const http = require('https')

const req = http.request('https://www.baidu.com', (res) => {
    res.on('data', (data) => {
        console.log(data);
    })
    res.on('end', () => {
        console.log('no more data');
    })
})

req.end()