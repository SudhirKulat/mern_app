import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './routes/post.js'

const app = express();
app.use(bodyParser.json({limit:"20mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"20mb", extended:true}))
app.use(cors())
app.use('/post', router)

const CONNECTION_URL = 'mongodb+srv://reactMaster:reactMaster123@cluster0.g4psn.mongodb.net/happymemory?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server started on ${PORT}`)))
    .catch(()=>console.log(`Error occured`));

    mongoose.set('useFindAndModify',false)



