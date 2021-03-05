import React from 'react'
import Post from './post/Post';
import {Grid, CircularProgress} from '@material-ui/core'
import {useSelector} from 'react-redux'

import useStyle from './postsStyle';
const Posts = () => {
    const posts = useSelector((state)=> state.posts)
    const classes = useStyle()
    return (
        
        !posts.length?<CircularProgress />:(
            
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {
                    
                    posts.map((post) => (
                        <Grid item key={post._id} xs={12} sm={6}>
                            <Post post={post}/>
                        </Grid>
                        
                    ))
                    
                }
            </Grid>
        )
    )
}

export default Posts;
