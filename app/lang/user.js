var user = {
  message: {
    success: {
      success: "Login Successful",
    },
    error: {
      error: "Login Failed. Please Try Again",
      password: "User found, Credentials Mismatch",
      email: "User not found, Please try again"
    }
  },
  emails: {
    register: {
      from: "NodeGenerator <support@nodegenerator.com>",
      subject: "Welcome to NodeGenerator",
      content: "Hi {username},<br><br>Welcome to the NodeGenerator Community. Your profile is not activated to help secure your account.<br><br>Please use the link to activate your profile : <a href='{link}'>Activate Profile</a><br><br>If the above link does not work please use the link below to complete the activation of your account.<br><br><code><a href='{link}'>{link}</a></code><br><br>With Regards,<br>NodeGenerator Support Team"
    }
  }
}

module.exports = user;