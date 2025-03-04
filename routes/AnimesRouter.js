import express from 'express';
import Anime from '../models/Anime.js';

const router = express.Router();

router.post('/api/animes', async(req, res) => {
 const {name, description, lanca, imageUrl} = req.body;

 const anime = new Anime({
  name,
  description,
  lanca,
  imageUrl,
 });

 try{
  const existingAnime = await Anime.findOne({name: name});

  if(existingAnime){
    return res.status(400).json({message: "Já existe um anime com esse nome!!"})
  }
  
  const savedAnime = await anime.save();
  res.status(201).json({message: 'Anime salvo com sucesso!!', savedAnime});
 }catch(error){
  console.error(error);
 }
});

router.get('/api/animes', async(req, res) => {
  try{
    const animes = await Anime.find();
    res.json({animes});
  }catch(error){
    console.error(error);
  }
});

router.put('/api/animes/:id', async(req, res) => {
  const {id} = req.params;
  const {name, description, lanca, imageUrl} = req.body;

  try{
    const updateAnime = await Anime.findByIdAndUpdate(id, {
      name,
      description,
      lanca,
      imageUrl,

    }, {new: true});

    res.status(200).json({message: updateAnime});
  }catch(error){
    console.error(error)
  }
});

router.delete('/api/animes/:id', async(req, res) => {
  const {id} = req.params;

  try{
    await Anime.findByIdAndDelete(id);
    res.status(201).json({message: 'Anime deletado com sucesso!!'});
  }catch(error){
    console.error(error);
  }

})

export default router;