var nodemailer = require('nodemailer');
var _ = require("lodash");
var lang = require("../lang");

var mailer = {
  sendMail: async function (to, mailContent) {
    try {
      mailContent.to = to;

      let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SSL,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      var response = await transporter.sendMail(mailContent);
      return response;
    } catch (err) {
      return err;
    }
  },
  welcomeEmail: async function (to, data) {
    var template = lang.user.emails.register;
    var content = '';
    
    content = await _.replace(template.html, new RegExp('{username}', 'g'), data.username);
    content = await _.replace(content, new RegExp('{link}', 'g'), data.link);
    template.html = content;
    
    var response = mailer.sendMail(to, template);
    return response;
  },
  resetPassword: async function (to, data) {
    var template = lang.user.emails.resetPassword;
    var content = '';

    content = await _.replace(template.html, new RegExp('{username}', 'g'), data.username);
    content = await _.replace(content, new RegExp('{link}', 'g'), data.link);
    
    template.html = content;
    
    var response = mailer.sendMail(to, template);
    return response;
  }
}

module.exports = mailer;