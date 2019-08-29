var user = {
  message: {
    success: {
      userwelcome: "Glassona API is Online",
      login: "User Access token generated successfully",
      register: "User Registered Successfully",
      resendEmail: "Activation Email has been successfully sent",
      activate: "The Profile has been activated",
      resetPassword: "Mail has been send to reset the password for the User",
      changePassword: "The Password has been changed successfully",
      verifyToken: "User Access token verified successfully"      
    },
    error: {
      login: "No User Found", 
      active: "The User Profile is not active. Please check your registered email for Account Activation Link",
      disabled: "The User Account has been disabled. Please Contact the support team for more information",
      deleted: "The User Account is being processed for deletion. Please Contact the support team for more information",
      register: "User Already Exists",
      resendEmail: "User does not exist",
      activate: "The Activation Access Token does not match",
      resetPassword: "User does not exist",
      changePassword: "The Reset Access Token does not match",
      matchPassword: "The Passwords don't match",
      verifyToken: "User Access token cannot be verified"
    }
  },
  emails: {
    register: {
      from: "Boilerplate <support@boilerplate.com>",
      subject: "Welcome to Boilerplate",
      html: "Hi {username},<br><br>Welcome to the Boilerplate Community. Your profile is not activated to help secure your account.<br><br>Please use the link to activate your profile : <a href='{link}'>Activate Profile</a><br><br>If the above link does not work please use the link below to complete the activation of your account.<br><br><code><a href='{link}'>{link}</a></code><br><br>With Regards,<br>Boilerplate Support Team"
    },
    resetPassword: {
      from: "Boilerplate <support@boilerplate.com>",
      subject: "Boilerplate: Password Reset",
      html: "Hi {username},<br><br>You have received this email as you have requested to reset the password for your Boilerplate Profile. <br><br>Please use the link to chanege the password for your profile : <a href='{link}'>Change Password</a><br><br>If the above link does not work please use the link below to complete the process of changing the password for your account.<br><br><code><a href='{link}'>{link}</a></code><br><br>With Regards,<br>Boilerplate Support Team"
    }
  }
}

module.exports = user;