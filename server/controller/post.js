import {PostMessage} from '../model/postMessage.js'

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