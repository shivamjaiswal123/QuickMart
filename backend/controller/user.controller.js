import { User } from '../models/user.model.js'
import z from 'zod'
import bcrypt from 'bcryptjs'
import generateToken from '../utils/generateToken.js'

const signupSchema = z.object({
    username: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long")
})
const signup = async(req, res) => {
    // input validation
    const parsedPayload = signupSchema.safeParse(req.body)
    if(!parsedPayload.success){
        return res.status(400).json({
            msg: parsedPayload.error.errors[0].message
        });
    }

    const { username, email, password } = req.body

    try {
        //check if user already exist
        const userExist = await User.findOne({
            $or: [
                {username}, {email}
            ]
        })
    
        if(userExist){
            return res.json({
                msg: "User already exist"
            })
        }
    
        // hash password
        const hashedPass = await bcrypt.hash(password, 10)
    
        // insert user in db
        const user = await User.create({
            username,
            email,
            password: hashedPass
        })

        // generate token and store in cookie
        const token = generateToken(user._id)
        res.cookie('token', token, {
            httpOnly: true,
            secure: true
        })
    
        res.status(200).json({
            msg: "User account created successfully"
        })
    } catch (error) {
        return res.status(403).json({
            msg: "error when signing up."
        })
    }
}

const signinSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long")
})
const signin = async(req, res) => {
    // input validation
    const parsedPayload = signinSchema.safeParse(req.body)
    if(!parsedPayload.success){
        return res.status(400).json({
            msg: parsedPayload.error.errors[0].message
        });
    }

    const { email, password } = req.body

    try {
        // check user already exist
        const userExist = await User.findOne({ email })
        if(!userExist){
            return res.json({
                msg: "User does not exist"
            })
        }else{
            // check if password is correct or not
            const validPass = await bcrypt.compare(password, userExist.password)
            if(!validPass){
                return res.json({
                    msg: "Incorrect password"
                })
            }
        }

        // generate token and store in cookie
        const token = generateToken(userExist._id)
        res.cookie('token', token, {
            httpOnly: true,
            secure: true
        })

        res.status(200).json({
            msg: "User logged in successfully"
        })
        
    } catch (error) {
        return res.status(403).json({
            msg: "error when signing in."
        })
    }
}

const logout = async (req, res) => {
    res.clearCookie('token', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({ message: 'Logged out successfully' });
}

const getAllUsers = async(req, res) => {
    const users = await User.find({}).select(" -password ")
    res.json({
        users
    })
}

const getCurrentUserProfile  = async(req, res) => {
    res.status(200).json({
        profile: req.user
    })
}

const updateCurrentUserProfile = async(req, res) => {
    try {
        const user = await User.findById( req.user._id )
        if(!user){
            return res.status(403).json({
                msg: "User not found"
            })
        }

        const { username, email, password } = req.body

        if(username){
            user.username = username
        }
        if(email){
            user.email = email
        }
        if(password){
            const hashedPassword = await bcrypt.hash(password, 10)
            user.password = hashedPassword
        }

        await user.save()
        res.status(200).json({
            msg: "Update successful"
        })

    } catch (error) {
        return res.status(403).json({
            msg: "error when updating profile"
        })
    }
}

const deleteUserById = async(req, res) => {
    const userId = req.params.id
    try {
        const userExist = await User.findById(userId)
        if(!userExist){
            return res.status(404).json({
                msg: "User not found"
            })
        }

        if(userExist.isAdmin){
            return res.status(403).json({
                msg: "Can not delete admin"
            })
        }

        await User.deleteOne({ _id: userId })

        res.status(200).json({
            msg: "User deleted successfully" 
        })
    } catch (error) {
        return res.status(403).json({
            msg: "error when deleting user"
        })
    }
}

const getUserById = async(req, res) => {
    const userId = req.params.id
    try {
        const user = await User.findById(userId).select("-password -isAdmin -createdAt -updatedAt")
        if(!user){
            return res.status(404).json({
                msg: "User not found"
            })
        }

        res.status(200).json({
            user
        })
    } catch (error) {
        return res.status(403).json({
            msg: "error when getting user"
        })
    }
}

const updateUserById = async(req, res) => {

}
export { signup, signin, logout, getAllUsers, getCurrentUserProfile, updateCurrentUserProfile, deleteUserById, getUserById, updateUserById}