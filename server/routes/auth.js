import express from 'express';
import {register} from '../controllers/authController'

const router = express.Router();

// router.get("/:message", showMessage);

router.post("/register", register);


module.exports = router;