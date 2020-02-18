let dataStore = []
let reqUrl = null;
let newReport = {
    postHead: "Poor Service at Unilever",
    postBody: "lorem ipsum dolor sit amet with some useles gibberish just to fillup empty space and ensure the body isnt empty and can go as long as we want it to go",
    postImages: ["Image1", "Image2", "Image3"],
    currentRoute: reqUrl,
    comments: [{
        body: "Some comment from some folk",
        date: Date.now
    }]
}

let createOne = (req, res) => {
    // let ReportModel = mongoose.model('Reports', reportsSchema);
    reqUrl = req.url;
    // newReport.save()
    dataStore.push(newReport);
    res.status(200).json(newReport);
}

let getAll = (req, res) => {
    res.status(200).json(dataStore);
}

let getOne = (req, res) => {
    if (dataStore[req.params.id]) {
        res.status(200).json(dataStore[req.params.id]);
    } else {
        res.status(404).send({
            message: "Not found"
        })
    }
}


let updateOneById = (req, res) => {
    let reqUrl = req.url.split('/');
    let dataId = reqUrl[reqUrl.length - 1];
    // let dataToUpdate = dataStore[dataId];
    // for (let value in req.body) {
    res.status(202).json(dataStore[dataId]);
    // }
}

let deleteOneById = (req, res) => {
    let reqUrl = req.url.split('/');
    let dataId = reqUrl[reqUrl.length - 1];
    // let dataToUpdate = dataStore[dataId];
    // for (let value in req.body) {
    res.status(202).json(dataStore[dataId]);
    // }
}

// exports.createNewReport = (dataStore) => {
//     dataStore.push({
//         userId: 1,
//         postHead: 'Poor Service at Unilever',
//         postBody: 'lorem ipsum dolor sit amet with some useles gibberish just to fillup empty space and ensure the body isnt empty and can go as long as we want it to go',
//         postImages: ['Image1', 'Image2', 'Image3'],
//         totalComments: 10
//     });
//     res.json(dataStore[dataStore.length - 1]);
// }

// exports.updateReportWithId = (req, res) => {
//     res.json(req);
// }

// exports.deleteReportWithId = (req, res) => {
//     res.json(req);
// }

module.exports = {
    getAll,
    getOne,
    createOne,
    updateOneById,
    deleteOneById
}