const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
// This code defines a User model using Mongoose, which includes an email field and uses the    
// passport-local-mongoose plugin to add username and password authentication functionality.
// The email field is defined but not set to be required or unique, which may need to be adjusted based on application requirements.
// The passport-local-mongoose plugin automatically adds fields for username and password,
// and provides methods for hashing passwords and validating user credentials.  
// The model is then exported for use in other parts of the application, allowing for user authentication and management.
