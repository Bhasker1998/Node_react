const mongoose = require('mongoose');

const Leavedate = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
   },
  // date: {
  //   type: Date,
  //   default: Date.now
  // },
  reason:{
    type:String,
    required:true
  }
});

const Leave = mongoose.model('Leave', Leavedate);

module.exports = Leave;
