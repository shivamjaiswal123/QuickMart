import jwt from 'jsonwebtoken'

const generateToken = (payload) => {
    const token = jwt.sign({ payload }, process.env.JWT_SECRET, { 
        expiresIn: "30d"
     })

     return token
}

export default generateToken