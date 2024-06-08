import { Response } from 'express'

const generalResponse = (
  response: Response,
  data: any = [],
  message: string = '',
  toast: boolean = false,
  statusCode: number = 200,
) => {
  response.status(statusCode).send({
    data: data,
    message: message,
    toast: toast,
  })
}

export default generalResponse
