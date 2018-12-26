var jsonwebtoken = require('jsonwebtoken');

var jwt = {
  issueJWT: function (user) {
    var payload = {
      email: user.email,
      username: user.username,
      role: user.role
    }

    var options = {
      audience: process.env.JWT_AUDIENCE,
      expiresIn: process.env.JWT_EXPIRY,
    }

    var jwtToken = jsonwebtoken.sign(payload, process.env.JWT_KEY, options);
    return jwtToken;
  },
  verifyJWT: function (bearer) {
    var token = bearer.split(" ")[1];

    var verify = jsonwebtoken.verify(token, process.env.JWT_KEY, {
      audience: process.env.JWT_AUDIENCE
    });

    return verify;
  }
}

module.exports = jwt;