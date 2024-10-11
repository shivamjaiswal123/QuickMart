import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'

const authMiddleware = async(req, res, next) => {
    try {
        const token = req.cookies && req.cookies.token ? req.cookies.token : ""
        if(!token){
            return res.status(401).json({
                msg: "Unauthorized request"
            })
        }

        const decodedValue = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decodedValue.payload).select(" -password ")
        if(!user){
            return res.status(401).json({
                msg: "Invalid access token"
            })
        }

        req.user = user
        next()

    } catch (error) {
        return res.status(401).json({
            msg: "error in verification"
        })
    }
}

const authorizedAsAdmin = async(req, res, next) => {
    if(req.user && req.user.isAdmin){
        next()
    }else{
        return res.status(401).json({
            msg: "Not authorized as an admin"
        })
    }
}

export { authMiddleware, authorizedAsAdmin }