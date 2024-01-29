const express = require('express');

const router = express.Router();




router.get('/', (request, response) => response.status(200).send('Router esta funcionando'));
//               (res   , res     )

module.exports = router;