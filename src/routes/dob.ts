import express from 'express'
import { dob } from '../controllers/dob';
import {checkQueryParam} from '../middlewares/error.middleware'

const router = express.Router();

router.get('/howold', checkQueryParam, dob.calculate_age)
router.get('/', dob.welcome)

module.exports = router
