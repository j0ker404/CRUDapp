const express = require('express');
const router = express.Router()

// load apis
const crud = require('./CRUD');

// mount apis
router.use('/crud', crud);

router.get('/', (req,res) => {
    res.json(
        {
            message: "Welcome to the api",
        }
    );
});
module.exports = router;