import express from 'express';
import {register, login} from '../controllers/authController'

const router = express.Router();

// router.get("/:message", showMessage);

router.post("/register", register);

router.post("/login", login);


module.exports = router;