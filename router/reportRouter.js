let express = require('express');
let router = express.Router()

let dataStore = []

router.get('/', (req, res) => {
    // let ReportModel = mongoose.model('Reports', reportsSchema);
    let newReport = {
        postHead: "Poor Service at Unilever",
        postBody: "lorem ipsum dolor sit amet with some useles gibberish just to fillup empty space and ensure the body isnt empty and can go as long as we want it to go",
        postImages: ["Image1", "Image2", "Image3"],
        currentRoute: req.url,
        comments: [{
            body: "Some comment from some folk",
            date: Date.now
        }]
    }
    // newReport.save()
    dataStore.push(newReport);
    res.json(dataStore);
})

router.get('/:id', (req, res) => {
    if (dataStore[req.params.id]) {
        res.json(dataStore[req.params.id]);
    } else {
        res.status(404).send({
            message: "Not found"
        })
    }
})


router.patch("/report/:id", (req, res) => {
    res.json(req);
});

router.delete("/report/:id", (req, res) => {
    res.json(req);
});

module.exports = router