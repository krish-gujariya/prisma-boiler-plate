
import { NextFunction, Response } from "express";
import Joi from "joi";
import argon2 from "argon2";
import generalResponse from "./generalResponse.helper";


// Function for generate hash password
const genPassword = async (passString: string) => {
  return await argon2.hash(passString);
};



// Common code block to send fetched data in response json
const fetchResponseFunc = (
  res: Response,
  data: { success: boolean; result: any },
  message?:string
) => {
  if (data.success) {
    generalResponse(res,data.result,message, true,200)
  } else {
    generalResponse(res,null,message, false,500)
  }
};

// code block to show validation error message 
const validationStatus = (res:Response,next:NextFunction,error?:Joi.ValidationError)=>{
  if(error){
    res.json({success:false, message:error.message})
  }
  else{
    next();
  }
}

// function for common format return object 
const returnObjectFunction = async(flag:boolean, message?:string, data?:any)=>{

  return { success:flag, message:message, result:data}
}

export {
  genPassword,
  fetchResponseFunc,
  validationStatus,
  returnObjectFunction
};

