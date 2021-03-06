import PostMessage from '../model/postMessage.js'
import mongoose from 'mongoose'
import express from 'express';
const router = express.Router();

export const getPost = async(req,res)=>{
    try {
        const postMessage = await PostMessage.find()
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createPost = async(req,res)=>{
    const post = req.body;
    console.log("in create post server")
    const newPost = new PostMessage(post)
    try {
        await newPost.save();
        res.status(201).json(newPost)
        console.log("no come")
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const updatePost= async(req, res)=>{
    const {id} = req.params
    const post = req.body
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')
    console.log("Updating");
    console.log(id, post)
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new:true})
    res.status(204).json(updatePost)
}

export const deletePost=async(req, res)=>{
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')
  await PostMessage.findByIdAndRemove(id)
  console.log(id)
  res.json({message:"Post has been deleted"})
}

export const likePost= async(req, res)=>{
  const { id } = req.params;
  console.log(id)
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const post = await PostMessage.findById(id);

  const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

  res.json(updatedPost);
}

export default router;
