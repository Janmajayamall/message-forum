
const defaultState = [];

export default (state = defaultState, action ) =>{
    switch(action.type){
        case 'POST_SOMETHING':
            return[
                ...state,
                action.newPost
            ];
        case 'EDIT_POST':
            return state.map((post)=>{
                if(post.postID === action.postID){
                    return {
                        postID: post.postID,
                        authID: action.authID,
                        displayName: action.displayName,
                        ...action.updates
                    }}
                else {
                    return post;
                }
                });
        case 'SET_POSTS_STATE':
                return action.posts;
        case 'REMOVE_POST':
                return state.filter((post)=>{
                    return post.postID !== action.postID;
                });
        // case 'INSERT_NEW_COMMENT':
        //         return state.map((post)=>{
        //             if(post.postID === action.postID){
        //                 return{
        //                     ...post,
        //                     comments:[
        //                         ...post.comments,
        //                         action.newComment
        //                     ]
        //                 }}
        //             else {
        //                 return post
        //             }
        //             }
        //         );
        // case 'EDIT_COMMENT':
        //         const selectedPost = state.find((post)=>post.postID === action.postID);
        //         const comments = selectedPost.comments;
        //         const withEditedComment = comments.map((comment)=> {
        //             if(comment.commentID === action.commentID){
        //                 return {
        //                     commentID: action.commentID,
        //                     ...action.editedComment
        //                 }
        //             }
        //         });
        //         const selectedPostWithEditedComment = {
        //             ...selectedPost,
        //             comments: withEditedComment
        //         }
        //         return state.map((post)=>{
        //             if(post.postID === action.postID){
        //                 return selectedPostWithEditedComment
        //             }
        //             else{
        //                 return post;
        //             }
        //         });

        default:
            return state;
    }
}

