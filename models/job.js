const mongoose = require('mongoose');
const ApplicationSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  status: { type: String, required: true },
  dateApplied: { type: Date,default:Date.now, required: false},
});
module.exports = mongoose.model('Application', ApplicationSchema);






















// const mongoose = require('mongoose');
// jobSchema = new mongoose.Schema({
//     company:{
//         type: String,
//         required: true
//     },
//     position:{
//         type: String,
//         required: true
//     },
//     status:{
//         type: String,
//         required: true
//     },
//     Date:{
//         type:Date,
//         default: Date.now,
//         requied: false,
//     }
// })

// const Job = mongoose.model('jobSchema',jobSchema);
// module.exports = Job;