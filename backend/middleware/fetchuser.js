const jwt = require('jsonwebtoken')
const jwt_sec = "sandhuisgodboy"

const fetchuser = (req, res, next) => {
    //get the user from the jwt token and append id
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send({ error:"please authenticate using valid token"})
    }

    try {
        const data=jwt.verify(token,jwt_sec)
        req.user=data.user;
        next();
        
    } catch (error) {
        res.status(401).send({error:"please authenticate using valid token"})
      
    }
}

module.exports = fetchuser;