// 
// skapar en modell för hur en produkt ser ut / vilken data som ska finnas
// specifik för mongo db

// importerar mongoose
const mongoDb = require('mongoose');

// skapa ett sk. schema för en produkt
const ProductSchema = new mongoDb.Schema({

  _id: mongoDb.Schema.Types.ObjectId,
  category:{
    type: String,
    trim: true,
    required: [true, 'Please add category']
  },
  name: {
    type: String,
    trim: true,
    required: [true, 'Please add name']
  },
  shortdesc:{
    type: String,
    trim: true,
    required: [true, 'Please add text']
  },
  description:{
    type: String,
    trim: true,
    required: [true, 'Please add text']
  },
  targetprice:{
    type: Number,
    required:[true,'Please add a price']
  },
  price:{
    type: Number,
    required:[true,'Please add a price']
  },
  badgetype:{
    type: String,
    required:false
  },
  badgetext:{
    type: String,
    required:false
  },
  logo:{
    type: String,
    required:false
  },
  image:{
    type: String,
    required:[true, 'Please add a imagepath']
  },
  rating:{
    type: Number,
    required:false
  },
  otherinfo:{
    type: String,
    required:false
  },
  created: {type: Date, default: Date.now},
  modified: {type: Date, default: Date.now}

})

// exporterar "class" Product med modell ProductSchema
module.exports = mongoDb.model('Product',ProductSchema);






