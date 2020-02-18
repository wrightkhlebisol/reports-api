let express = require('express');
let router = express.Router()
let crud = require('../controllers/crudController')

router
    .route('/')
    .get(crud.getAll)
    .post(crud.createOne)

router
    .route('/:id')
    .get(crud.getOne)
    .put(crud.updateOneById)
    .delete(crud.deleteOneById)

module.exports = router