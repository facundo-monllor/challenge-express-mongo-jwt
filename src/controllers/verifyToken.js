import jwt from "jsonwebtoken";
import {FIRM} from "../../config.js"


export const verifyToken = async (req, res, next) => {
    try{
        const token = req.headers.authorization?.split(" ")[1]
        if(!token){
            return res.status(400).send("No existe el token")
        }

        const verifyToken = await jwt.verify(token,`"${FIRM}"`)
        
        req.userId = verifyToken.userId
        next()
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message); 
 }
}