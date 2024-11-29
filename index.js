const express = require('express');
const redis = require('redis');
const app= express();
const client =redis.createclient();
client.set(visists,0);

app.get('/', (req, res) => {
    client.get('visists', (err, visists)=> {
        res.send('number of visists is' + visists);
        client.set('visists', parseInt(visists)+1);
     });
});

app.listen(8081, () =>{
    console.log('Listening on port 8081');
});