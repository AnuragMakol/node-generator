var user = {
  message: {
    success: {
      userwelcome: "LeanBoilerplate API is Online",
      login: "User Access token generated successfully",
      register: "User Registered Successfully",
      verifyToken: "User Access token verified successfully"      
    },
    error: {
      login: "No User Found", 
      active: "The User Profile is not active. Please check your registered email for Account Activation Link",
      disabled: "The User Account has been disabled. Please Contact the support team for more information",
      deleted: "The User Account is being processed for deletion. Please Contact the support team for more information",
      register: "User Already Exists",
      verifyToken: "User Access token cannot be verified"
    }
  },
  emails: {
    register: {
      from: "LeanBoilerplate <support@leanboilerplate.com>",
      subject: "Welcome to LeanBoilerplate",
      content: "Hi {username},<br><br>Welcome to the LeanBoilerplate Community. Your profile is not activated to help secure your account.<br><br>Please use the link to activate your profile : <a href='{link}'>Activate Profile</a><br><br>If the above link does not work please use the link below to complete the activation of your account.<br><br><code><a href='{link}'>{link}</a></code><br><br>With Regards,<br>LeanBoilerplate Support Team"
    }
  }
}

module.exports = user;