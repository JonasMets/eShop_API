// 
// här har vi funktioner för att generera och 
// 
const jwt = require('jsonwebtoken');
// secret key ska vara något svårgissat
const secretKey = process.env.SECRET_KEY

exports.genToken = (id) =>{

  return jwt.sign({id: id}, secretKey, {expiresIn:'1h'})
}

exports.checkToken = (req,res, next) =>{
  try {
    const token = req.headers.authorization.split(" ")[1];
    req.userData = jwt.verify(token, secretKey);
    next();
  } catch (error) {
    return res.status(401).json({
      statusCode: 401,
      status: false,
      message: 'Access restricted'
    })
  }
}