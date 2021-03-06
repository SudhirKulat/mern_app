import * as api from '../api/index';

 export const getPost=()=>{
    return async(dispatch)=>{
        try {
            const {data} = await api.fetchPosts();
            dispatch({type:'FETCH_ALL',payload:data})
        } catch (error) {
           console.log(error)
        }
    }
 }

 export const updatePost=(id,post)=>{
     return async(dispatch)=>{
       try {
          const {data} = await api.updatePost(id,post)
           dispatch({type:'UPDATE',payload:data})
       } catch (e) {
          console.console.log(e);
       }

     }
 }
 export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: 'LIKE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

 export const createPost=(post)=>{
     return async(dispatch)=>{
        try {
            const {data} = await api.createPost(post);
            dispatch({type:'CREATE_POST', payload: data})
        } catch (error) {
            console.log(error)
        }
    }
 }

 export const deletePost=(id)=>{
     return async(dispatch)=>{
        try {
            await api.deletePost(id);
            dispatch({type:'DELETE_POST', payload: id})
        } catch (error) {
            console.log(error)
        }
    }
 }
