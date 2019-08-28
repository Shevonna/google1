var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema({
 
  title: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  authors: {
    type: String,
    trim: true,
    required: "Author is Required",
  },
  
  description: {
    type: String,
    trim: true,
    required: "Description is Required"
  },
 
  image: {
    type: String,
    trim: true,
    required: "Image is Required"
  },

  link: {
    type: String,
    trim: true,
    required: "Link is Required"
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model("Book", BookSchema);

// Export the User model
module.exports = Book;
