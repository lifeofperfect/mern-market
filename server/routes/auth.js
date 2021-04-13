import express from 'express';
import {showMessage} from '../controllers/authController'

const router = express.Router();

router.get("/:message", showMessage);

module.exports = router;