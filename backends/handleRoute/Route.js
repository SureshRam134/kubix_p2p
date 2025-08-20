import { Router } from "express";
import { createRegister, getRegisterData,generateToken } from "../RegisterController_1/controlRegister.js";
import { checkRegister, } from "../RegisterController_1/checkControlRegister.js";
// import { createRegister } from "../RegisterController_1/controlRegister.js";




 const Route = Router();
    Route.post('/register', checkRegister, createRegister)
    Route.get('/register', getRegisterData, )
    
    
// jwt
//npm i jsonwebtoken
    Route.get('/LoginAuth',generateToken )



export default Route;