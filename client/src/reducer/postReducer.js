
const reducer =(posts=[], action)=>{
    switch(action.type){
        case 'FETCH_ALL': 
            return action.payload;
        case 'CREATE_POST':
            console.log("store is updating")
            return [...posts,action.payload];
        default:
            console.log("returning default store")
            return posts;
                
    }
}

export default reducer;