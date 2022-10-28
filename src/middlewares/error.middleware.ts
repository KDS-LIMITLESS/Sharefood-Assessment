import {Request, Response, NextFunction} from 'express'


export async function checkQueryParam(req:Request, res:Response, next:NextFunction) {
    // type cast ?dob string to type number
    const params: number = +req.query.dob!
    // check if number is a valid integer
    if (!Number.isInteger(params) ) 
        return res.status(400).send(` dob is not a valid date combination`)

    next()
}