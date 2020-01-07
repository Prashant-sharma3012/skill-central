const jwt = require('jsonwebtoken');

const authenticate = (req,res,next) => {
  if(!req.headers.authorization){
    return res.status(403).send("No Token On request");
  }

  let token = req.headers.authorization.split('Bearer ')[1];

  try {
    var decoded = jwt.verify(token, 'supersecret');
    req.user = decoded;
    next();
  } catch(err) {
    res.status(403).send("Bad Token");
  }
}

module.exports = {
  authenticate
}