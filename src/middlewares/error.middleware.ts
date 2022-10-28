import {Request, Response, NextFunction} from 'express'


export async function checkQueryParam(req:Request, res:Response, next:NextFunction) {
    const params: number = +req.query.dob!
    if (!Number.isInteger(params) ) 
        return res.status(400).send(` dob is not a valid date combination`)

    next()
}