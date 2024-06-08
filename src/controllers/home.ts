import { Request,Response } from "express"

export const demoResponse  = (req:Request, res:Response)=>{
    res.status(200).send("All Ok");
}