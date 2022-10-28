import { Request, Response } from 'express';



class DOB {

    async calculate_age(req:Request, res:Response) {
        let date_today =  new Date;
        let birth_date: string | any, age;

        if (req.query.dob?.length === 8){
            
            birth_date = convertToDate(req.query.dob)
            age = date_today.getFullYear() - birth_date.getFullYear()

            return res.status(200).json({current_age: age})
        }

        birth_date = new Date(+req.query.dob!)

        age = date_today.getFullYear() - birth_date.getFullYear();

        return res.status(200).json({current_age: age})
    }
    
}


function convertToDate (dateString: string | any): Date {
    let formatedString = dateString.slice(0, 4) + '-' + dateString.slice(4, 6) + '-' + dateString.slice(6, 8);
    const dateObj = new Date(formatedString) 
      
    return dateObj
}

// 987418998000
export const dob = new DOB()