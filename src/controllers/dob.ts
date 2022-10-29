import { Request, Response } from 'express';


class DOB {

    async welcome(req:Request, res:Response) {
        return res.status(200).send(`
        <h3> 
           Hi  Welcome to my ShareFood assesment test <br>
        </h3> 
        <p>Navigate to /howold?dob=<timestamp>  to calculate age</p>`)
    }

    
    async calculate_age(req:Request, res:Response) {
        let date_today =  new Date;
        let birth_date: string | any, age;
        const r: any = req.query.dob
    
        // check if ?dob integer is a valid date format of yyyymmdd
        if (r.length === 8 || r.at(4) === '-' ){
            birth_date = convertToDate(req.query.dob)
            // subtract date today from given dob
            age = date_today.getFullYear() - birth_date.getFullYear()
            
            return res.status(200).json({age: `${age} Year(s)`})
        }
        // type cast query parameter to integer
        birth_date = new Date(+req.query.dob!)
        // subtract date today from given dob
        age = date_today.getFullYear() - birth_date.getFullYear();

        return res.status(200).json({age: `${age} Year(s)`})
    }   
}

// function for converting giving string to a valid date string
export function convertToDate (dateString: string | any ): Date {
    let formatedString;
    let dateObj;

    if (dateString.charAt(4) === '-'){
        formatedString = dateString.slice(0, 10)
        dateObj = new Date(formatedString) 
    }else {
        formatedString = dateString.slice(0, 4) + '-' + dateString.slice(4, 6) + '-' + dateString.slice(6, 8);
        dateObj = new Date(formatedString) 
    }
    return dateObj
}

export const dob = new DOB()