import {Request, Response, NextFunction} from 'express'
import { convertToDate } from '../controllers/dob'


export async function checkQueryParam(req:Request, res:Response, next:NextFunction) {
    const params = req.query.dob
    let x = convertToDate(params)  
    let date:any =  new Date(+req.query.dob!)  
   
    // check if number is a valid date 
    if ( !isNaN(x.getFullYear()) || !isNaN(date))  
        next();
    else {
        return res.status(400).json({error: ` dob is not a valid date combination`});
    }
}