const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    googleId: String,
    username: String,
    bucketList: Array
});
mongoose.model('user', userSchema);
