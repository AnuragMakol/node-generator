var mongoose = require("mongoose");
var beautifyUnique = require("mongoose-beautiful-unique-validation");

mongoose.connect(process.env.MONGO_URL,{ 
  useNewUrlParser: true,
  useCreateIndex: true
});

var user = require('./models/user');

user.plugin(beautifyUnique);

var database = {
  "user": mongoose.model("user", user),
}

module.exports = database;