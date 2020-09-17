// 
// här konfigurerar vi uppkoppling mot databas
// 
// skapar en ny instans av mongoose
const db = require('mongoose');
const colors = require('colors');

// sätter upp serveraddress mongo server



// starta mongo database
// sätter up connection mot mongodb servern och exporterar startMongoServer
// 
exports.startMongoServer = db
.set('useCreateIndex', true)
.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
})
.then((result) => {
  console.log('Mongo db running'.magenta)
}).catch((err) => {
  console.log(err.reason)
});


// module.exports = db


