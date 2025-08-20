import { registermodel } from "../RegisterMessions_1/missionRegister.js"
import jwt from 'jsonwebtoken'


export const createRegister = async(req, res) => {

        try {
            const{email, phone, password}= req.body
            
            const checkUser = await registermodel.findOne({password})

            if(!checkUser) {
                const storeRegister = new registermodel({email, phone, password})
                await storeRegister.save()
                return res.status(201).json({message:'Successfully Added', storeRegister})  
            }else{
                return res.status(201).json({message:'You Are Create Unique Password'})  
            }
            
            
        } catch (error) {
            res.status(500).json({error:'Some thing error', error})  
        }

        
 } 


 // get to data 
    export const getRegisterData = async (req, res) => {

       try {
           const registerAllData = await registermodel.find()
           res.status(200).json({message:"SuccessFully Find",registerAllData })
           
        } catch (error) {
           res.status(500).json({message:"Invaild Phone Number or Password", error})

       }
        


    }


    //generateToken ccontroller
    export const generateToken= (req, res) => {
    
        try {
            const {email,password}= req.body
            if(!email ==="suresh@gmail.com" && !password=== "suresh123") {
                res.status(404).json({message:"Not Fill the email and password"})
            }
            
            
            
            const token = jwt.sign({email,password}, process.env.JWT_SECRET, {expiresIn:process.env.jwt_EXPIRES})
            res.status(200).json({message:"Successfully Created"}, token)
        } catch (error) {
            res.status(200).json({error:"Some thing error"},)
            
        }




    }