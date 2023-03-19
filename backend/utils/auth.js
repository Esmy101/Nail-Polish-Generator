const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = process.env.TOKEN_SECRET;
const expiration = process.env.TOKEN_EXPIRATION;

module.exports = {
  // function for our authenticated routes
  authMiddleware: async function ({ req, res }, next) {
    // allows token to be sent via  req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
    console.log(token);

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      //return res.status(400).json({ message: "You have no token!" });
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
      //return res.status(400).json({ message: "invalid token!" });
    }

    // send to next endpoint
    return req;
  },
  signToken: function ({email, _id }) {
    const payload = {email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};