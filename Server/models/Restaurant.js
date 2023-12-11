const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantSchema = new Schema({
  restaurantName: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  Address: String,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
