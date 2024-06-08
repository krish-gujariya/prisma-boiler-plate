import express from 'express';
import { configDotenv } from 'dotenv';
import swaggerUi from 'swagger-ui-express';


configDotenv();

import swaggerJsdoc from 'swagger-jsdoc';
import router from './routes/home'
import path from 'path';
import { logger } from './utils/pino';

const swaggerDefinition ={
    openapi: '3.0.0',
    info:{
        title:`Spotify-Clone Backend Prisma`,
        version:`1.0.0`
    },
    servers:[
        {
            url:`http://localhost:9000/`,
            description:`Home Page`
        }
    ],
    
}

const options ={
    swaggerDefinition,
    apis:['./routes/*.js']
}
const swaggerSpec =swaggerJsdoc(options);

const app = express()
const port:string|number = process.env.PORT|| 9000;

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(router);


app.listen(port, ()=>{logger.info(`App is listning on port no. ${port}`);
})