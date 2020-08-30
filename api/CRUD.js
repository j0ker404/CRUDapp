const express = require('express');
const router = express.Router();

// ghetto database

let people = [
    {
        "name": "bob",
        "age": 42,
    },
];

// create
// router.post('createUser/:name/:age', (req,res) => {
//     const data = req.params;
//     people.push({
//         "name": data[0],
//         "age": parseInt(data[1])
//     });
// });

// Create one
router.post('/', (req,res) => {
    res.json({
        message: "Hello Create One"
    })
});

// read All
router.get('/', (req, res) => {
    // res.json(people);
    res.json({
        message: "Hello Read all"
    })
});

// read one
router.get('/:name', (req, res) => {
    res.json({
        message: 'Read one',
    })
});


// Update one
router.put("/:name", (req,res) => {
    res.json({
        message: 'Update one',
    })
});

// Delete one
router.delete("/:name", (req,res) => {
    res.json({
        message: 'Delete one',
    })
});

module.exports = router;