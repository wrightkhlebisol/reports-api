const express = require('express');
const routes = require('./router/routeTest')

let app = express();
let dataStore = []

app.get('/reports', (req, res) => {
    res.json(dataStore);
})

app.get('/report', (req, res) => {
    dataStore.push({
        userId: 1,
        postHead: 'Poor Service at Unilever',
        postBody: 'lorem ipsum dolor sit amet with some useles gibberish just to fillup empty space and ensure the body isnt empty and can go as long as we want it to go',
        postImages: ['Image1', 'Image2', 'Image3'],
        totalComments: 10
    });
    res.json(dataStore[dataStore.length - 1]);
})

app.patch('/report/:id', (req, res) => {
    res.json(req);
});

app.delete('/report/:id', (req, res) => {
    res.json(req);
});


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});