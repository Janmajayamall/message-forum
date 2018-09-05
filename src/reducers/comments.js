const defaultCommentsState = [];


export default (state = defaultCommentsState, action) =>{
 switch(action.type){
     case 'INSERT_NEW_COMMENT':
        return [
            ...state,
            action.newCommentObject
        ]
     case 'EDIT_COMMENT':
        return state.map((comment)=>{
            if(comment.commentID === action.commentID){
                return action.editedComment
            }
            else{
                return comment
            }
        });
     case 'SET_POST_COMMENTS':
        return action.comments
     case 'REMOVE_COMMENT':
        return state.filter((comment)=>{
            return comment.commentID !== action.commentID
        })
     default:
        return state;
 }
}