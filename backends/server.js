import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import Route from './handleRoute/Route.js';
// import route from './handleRoute/Route.js';





const server = express()
dotenv.config()
const PORT = process.env.PORT || 5001
server.use(cors())
server.use(express.json())
server.use('/Api/users', Route)


// connect to mongoose DB
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {console.log('DataBase Connected') })
    .catch((error) => {console.log("DataBase Not Connected", error)})


    // server.post('/api/user/register', (req,res) => {
    //     console.log(req.body);
        
    // })


server.listen(PORT, () =>{
    console.log(`server connected at http://localhost/:${PORT}`);
    
})

