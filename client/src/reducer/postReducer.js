
const reducer =(posts=[], action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE_POST':
            return [...posts,action.payload];
        case 'UPDATE':
        case 'LIKE':
            return posts.map((post)=>post._id===action.payload._id?action.payload:post)
        case 'DELETE_POST':
            console.log("deleting work")
            return posts.filter((post) => post._id != action.payload)
        default:
            return posts;

    }
}

export default reducer;
