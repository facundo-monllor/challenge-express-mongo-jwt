import User from "../models/Users.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import { FIRM } from "../../config.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({email: email})
        if(!userExist){
            return res.status(404).json({ message: "El usuario no existe" });
        }

        let same = await bcrypt.compare(password, userExist.password)
        if(!same){
            return res.status(404).json({ message: "La contraseña no coincide" });
        }

        const userId = userExist._id.toString()
        const token = jwt.sign({userId}, `"${FIRM}"`)

        res.status(200).json({token})
    } catch (error) {
       console.error(error);
       res.status(500).send(error.message);   
    }
};