var lang = require('../lang');
var models = require('../models');
var helpers = require('../helpers');

var methods = {
  /**
   * Request for Base URL of the API and for Testing if API is Live
   * @group Users
   * @route GET /
   */
  welcome: function (req, res) {
    try {
      res.json({
        status: res.statusCode,
        message: lang.user.message.success.userwelcome
      });
    } catch (err) {
      res.json({
        status: err.status,
        message: err.message
      });
    }
  },
  /**
   * @typedef Login
   * @property {string} email.required - email address of the user - eg: anurag.makol@yopmail.com
   * @property {string} password.required - password for user - eg: 123123123
   */
  /** 
   * Request to Issue JWT token for Users
   * @group Users
   * @route POST /user/login
   * @param {Login.model} login.body.required
   */
  login:async function (req, res) {
    try {
      var response = await models.user.findOne({
        email: req.body.email,
        password: req.body.password
      });

      if(response) {
        var issueToken = helpers.jwt.issueJWT({
          username: response.username,
          email: response.email,
          role: response.role
        });
        
        if(!response.active) {
          throw ({
            status: 400,
            message: lang.user.message.error.active
          });  
        } else if (response.disabled) {
          throw ({
            status: 400,
            message: lang.user.message.error.disabled
          });
        } else if (response.deleted) {
          throw ({
            status: 400,
            message: lang.user.message.error.deleted
          });
        } else {
          res.json({
            status: res.statusCode,
            message: lang.user.message.success.login,
            data: {
              token: issueToken
            }
          });
        }

      } else {
        throw ({
          status: 400,
          message: lang.user.message.error.login
        });
      }
    } catch (err) {
      res.json({
        status: err.status,
        message: err.message
      });
    }
  },

  /**
   * @typedef Register
   * @property {string} firstname.required - firstname for user - eg: Anurag
   * @property {string} lastname.required - lastname for user - eg: Makol
   * @property {string} username.required - username for user - eg: anuragm
   * @property {string} email.required - email address of the user - eg: anurag.makol@yopmail.com
   * @property {string} password.required - password of the user - eg: 123123123
   * @property {string} address.required - address of the user - eg: address in gurugram
   * @property {string} city.required - city of the user - eg: gurugram
   * @property {string} state.required - state of the user - eg: delhi
   * @property {string} country.required - country of the user - eg: india
   * @property {number} postal_code.required - postal code of the user - eg: 141414
   * @property {number} phone_number.required - phone number of the use - eg: 9876543210
   */
  /** 
   * Request to Register a New User
   * @group Users
   * @route POST /user/register
   * @param {Register.model} register.body.required
   */
  register: async function (req, res) {
    try {
      var response = await new models.user({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        postal_code: req.body.postal_code,
        phone_number: req.body.phone_number,
        created_at: Date.now()
      }).save();

      if (response) {
        res.json({
          status: res.statusCode,
          message: lang.user.message.success.register,
          data: response
        });
      } else {
        throw ({
          status: 400,
          message: lang.user.message.error.register
        })
      }
    } catch (err) {
      res.json({
        status: err.status,
        message: err.message
      });
    }
  },
  /**
   * @typedef VerifyToken 
   * @property {string} email.required - email address of the user - eg: anurag.makol@yopmail.com
   * @property {string} password.required - password of the user - eg: 123123123
   */
  /** 
   * Request for Verification of the JWT Token
   * @group Users
   * @route POST /user/verifyToken/
   * @param {VerifyToken.model} verifyToken.body.required
   * @security JWT
   */
  verifyToken: function (req, res) {
    try {
      if (req.headers.authorization && helpers.jwt.verifyJWT(req.headers.authorization)) {
        res.json({
          status: res.statusCode,
          message: lang.user.message.success.verifyToken
        });
      } else {
        throw ({
          status: 400,
          message: lang.user.message.error.verifyToken
        });
      }
    } catch (err) {
      res.json({
        status: err.status,
        message: err.message
      });
    }
  }
}

module.exports = methods;