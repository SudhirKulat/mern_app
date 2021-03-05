import * as api from '../api/index';

 export const getPost=()=>{
    return async(dispatch)=>{
        try {
            const {data} = await api.fetchPosts();
            dispatch({type:'FETCH_ALL',payload:data})
        } catch (error) {
           console.log(error.message) 
        }
    }
 }

 export const callMe=()=>{
     return (dispatch)=>{
         dispatch({type:'A',payload:''})
     }
 }

 export const createPost=(post)=>{
     return async(dispatch)=>{
        try {
            const {data} = await api.createPost(post);
            dispatch({type:'CREATE_POST', payload: data})
            console.log("action triggered")
        } catch (error) {
            console.log(error.message)
        }
    }
 }