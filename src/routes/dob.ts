import express from 'express'
import { dob } from '../controllers/dob';
import {checkQueryParam} from '../middlewares/error.middleware'

const router = express.Router();

router.get('/howold', checkQueryParam, dob.calculate_age)

module.exports = router

// sharefood/get-dob?dob=987418998000