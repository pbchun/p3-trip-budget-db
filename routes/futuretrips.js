const express = require('express');
const router = express.Router();

const queries = require('../queries/futuretripsqueries.js');


router.get("/", (request, response, next) => {
    queries.list().then(futuretrips => {
        response.json({futuretrips});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(futuretrips => {
        futuretrips
            ? response.json({futuretrips})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(futuretrips => {
        response.status(201).json({futuretrips: futuretrips});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(futuretrips => {
        response.json({futuretrips: futuretrips[0]});
    }).catch(next);
});

module.exports = router;