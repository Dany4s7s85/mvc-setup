const mongoose = require('mongoose');

const DB = 'mongodb+srv://huxxnainali:Mh10015mh@cluster0.z85io.mongodb.net/natours?retryWrites=true&w=majority'
mongoose
  .connect(DB, {
  })
  .then(() => {
    console.log("connection is successfull");
  })
  .catch((err) => {
    console.log(err);
  });

  const testSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A survey must have a title'],
        trim: true,
      },
})

const Friend = mongoose.model("Friend", testSchema);

module.exports = Friend ;