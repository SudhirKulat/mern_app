import React, {useState, useEffect} from 'react'
import useStyle from './formStyle';
import {TextField,Typography,Paper,Button} from '@material-ui/core'
import FileBase from 'react-file-base64'
import {useDispatch, useSelector} from 'react-redux'
import {createPost,updatePost} from '../../action/postAction'

const Form = ({currentUserId,setCurrentUserId}) => {
    const classes = useStyle()
    const dispatch = useDispatch()
    const [postData,setPostData] = useState({
        creator:'', title:'', message:'', tags:'', selectedFile:''
    })
    const post = useSelector((state) => currentUserId?state.posts.find((p)=>p._id===currentUserId):null);
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(currentUserId){
          dispatch(updatePost(currentUserId, postData))
        }else {
          dispatch(createPost(postData))
        }
        clear()
    }

    useEffect(()=>{
      if(post) setPostData(post)
    },[post])

    const clear=()=>{
      setCurrentUserId(null)
      setPostData({
          creator:'', title:'', message:'', tags:'', selectedFile:''
      })
    }
    return (
        <Paper className={classes.paper}>
            <form className={`${classes.form} ${classes.root}`} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Typography variant="h6">{currentUserId?'Editing':'Creating'}a memory</Typography>
                    <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData, creator:e.target.value})}/>
                    <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=> setPostData({...postData, title:e.target.value})}/>
                    <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=> setPostData({...postData, message:e.target.value})}/>
                    <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=> setPostData({...postData, tags:e.target.value})}/>
                    <div className={classes.fileInput}>
                        <FileBase type="file"
                                multiple={false}
                                onDone={({base64}) => setPostData({...postData, selectedFile:base64})} />
                    </div>
                    <Button className={classes.buttonSubmit} variant="contained" type="submit" color="primary" fullWidth size="large">Submit</Button>
                    <Button className={classes.buttonSubmit} variant="contained"  color="secondary" onClick={clear} fullWidth size="small">Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;
