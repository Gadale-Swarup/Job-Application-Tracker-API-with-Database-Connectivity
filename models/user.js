const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
module.exports = mongoose.model('User', UserSchema);






















// const mongoose = require('mongoose');


// const UserSchema = new mongoose.Schema({
//     Name:{
//         type:String,
//         required:false,
//     },
//     Email: {
//         type:String,
//         required:false,
//     },
//     Password:{
//         type:String,
//         required:false,
//     }
// });

// UserSchema.pre('save', async function(next) {
//     if (!this.isModified('Password')) {
//       return next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.Password = await bcrypt.hash(this.Password, salt);
//     next();
//   });

// const user = mongoose.model('User',UserSchema)
// module.exports = user;