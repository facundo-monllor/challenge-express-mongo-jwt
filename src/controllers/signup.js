import User from "../models/Users.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import {FIRM} from "../../config.js"

export const signup = async (req, res) => {
    try {
        const { email, password } = req.body

        const userExistente = await User.findOne({ email: email})
        if (userExistente) {
            return res.status(400).json({ message: "El usuario ya existe" });
        }

        const hashPassword = await bcrypt.hash(password, 10)
    
        const user = new User({email, password: hashPassword});
        await user.save();
        
        const userId = user._id.toString()
        const token = jwt.sign({userId},`"${FIRM}"`)

        res.status(201).json({user,hashPassword,token});
    } catch (error) {
       console.error(error);
       res.status(500).send(error.message); 
    }
}