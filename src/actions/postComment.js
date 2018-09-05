import database from './../firebase/firebase.js';

export const insertNewComment = (newCommentObject) =>{
    
    return{
        type: 'INSERT_NEW_COMMENT',
        newCommentObject: newCommentObject
    }
}

export const startInsertNewComment = (newComment) =>{
    return (dispatch) =>{
        return database.ref(`/comments`).push(newComment).then((ref)=>{
            const commentID = ref.key;
            const commentForState = {
                commentID: commentID,
                ...newComment
            }
            dispatch(insertNewComment(commentForState));
        })
    }
}

export const editComment = (editedComment, commentID) =>{
    return {
        type: 'EDIT_COMMENT',
        editedComment: editedComment,
        commentID: commentID
    }
}

export const startEditComment = (commentID, editedComment) =>{
    return (dispatch) =>{
        database.ref(`/comments/${commentID}`).set(editedComment).then((ref)=>{
            dispatch(editComment({
                commentID: commentID,
                ...editedComment
            },commentID));
        });
    }
}

export const setComments = (comments) =>{
    return {
        type: 'SET_POST_COMMENTS',
        comments: comments
    }
}

export const startSetComment = (postID) =>{
    return (dispatch)=>{
        var ref = database.ref('comments').orderByChild('postID').equalTo(postID);
        return ref.once('value').then((snapshot)=>{
            const postsAllComments = [];
            snapshot.forEach((childSnapshot)=>{
                postsAllComments.push({
                    commentID:childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setComments(postsAllComments)); 
        });
    }
}

export const removeComment = (commentID) => {
    return{
        type:'REMOVE_COMMENT',
        commentID: commentID
    }
}


export const startRemoveComment = (commentID) => {
    return (dispatch) =>{
        database.ref(`/comments/${commentID}`).remove().then((ref)=>{
            dispatch(removeComment(commentID))
        });
    }
}

