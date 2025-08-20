
export const checkRegister = async (req, res, next) => {
    
    const {email, phone, password} = req.body

    if(!email && !phone && !password){
        return res.status(400).json({error:"Email and password and phone are requiers"})
    }

    next();

}
