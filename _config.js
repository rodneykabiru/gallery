var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://rodney:rodney123@gallery.str4ax1.mongodb.net/darkroom?retryWrites=true',
    development: 'mongodb+srv://rodney:rodney123@gallery.str4ax1.mongodb.net/darkroom-dev?retryWrites=true',
    test: 'mongodb+srv://rodney:rodney123@gallery.str4ax1.mongodb.net/darkroom-test?retryWrites=true',
}
module.exports = config;
