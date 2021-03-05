import React, {useState} from 'react'
import useStyle from './formStyle';
import {TextField,Typography,Paper,Button} from '@material-ui/core'
import FileBase from 'react-file-base64'
import {useDispatch} from 'react-redux'
import {createPost} from '../../action/postAction'

const Form = () => {
    const classes = useStyle()
    const dispatch = useDispatch()
    const [postData,setPostData] = useState({
        creator:'', title:'', message:'', tags:'', selectedFile:''
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(createPost(postData))
    }

    const clear=()=>{

    }
    return (
        <Paper className={classes.paper}>
            <form className={`${classes.form} ${classes.root}`} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Typography variant="h6">Creating memory</Typography>
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
