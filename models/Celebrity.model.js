//  Add your code here
const { model, Schema } = require("mongoose");
const celebSchema = new Schema({
  name: {
    type: String,
  },
  occupation: {
    type: String,
  },
  catchPhrase: {
    type: String,
  },
});

const Celebrity = model("celebrity", celebSchema);

module.exports = Celebrity;