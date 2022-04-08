import { get } from 'https';

get('https://www.baidu.com', (res) => {
    res.on('data', (data) => {
        console.log(data);
    })
    // res.on('end', () => {
    //     console.log('no more data');
    // })
})
