import React from 'react';
import {Container, Typography, Grow, AppBar, Grid} from '@material-ui/core'
import memory from './images/memories.jpg'
import Form from './component/form/Form'
import Posts from './component/posts/Posts'
import useStyle from './style'
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';
import { getPost,callMe } from './action/postAction';
const App=()=>{
    const classes = useStyle()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost())
    }, []);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Memories</Typography>
                <img src={memory} className={classes.image} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;