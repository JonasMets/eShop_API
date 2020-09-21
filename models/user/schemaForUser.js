// 
// skapar en modell för hur en användare ser ut / vilken data som ska finnas
// specifik för mongo db

// importerar mongoose
const mongoDb = require('mongoose');


const UserSchema = mongoDb.Schema({

  _id: mongoDb.Schema.Types.ObjectId,
  userName: { type: String, required: [true, 'Please add userName'] },
  
  email: { type: String, required: [true, 'Please add email'], unique: true },
  passWordHash: { type: String, required: true },
  // 
  created: { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now }

})


// exporterar class User med modell UserSchema
module.exports = mongoDb.model('User', UserSchema);






