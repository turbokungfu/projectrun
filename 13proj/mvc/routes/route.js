import express from 'express'
const router = express.Router()
import { trainPost } from '../controllers/trains.js';

router.get("/trainpost", trainPost)

export { router }




// import express  from 'express'
// const router = express.Router()
// import { trainPost } from '../controllers/trains.js';


// router.get("/trainPost",  trainPost)

// export { router }