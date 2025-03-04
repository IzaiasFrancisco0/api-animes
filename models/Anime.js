import mongoose from 'mongoose';

const animeSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  lanca: {
    type: Number
  },
  imageUrl: {
    type: String
  }
});

const Anime = mongoose.model('Anime', animeSchema);

export default Anime;