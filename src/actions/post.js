import database from './../firebase/firebase.js'
import auth from '../reducers/auth.js';


export const newPost = (newPost)=>(
    {
        type: 'POST_SOMETHING',
        newPost: newPost
    }
);


export const startNewPost = (post) =>{
    return (dispatch) =>{
        
        return database.ref('/posts').push(post).then((ref)=>{
            const id = ref.key;
            dispatch(newPost({
                postID:id,
                ...post
            }));
        })
    }
}



export const editPost = (updates, postID, authID, displayName) =>{
    return{
        type: 'EDIT_POST',
        updates: updates,
        postID: postID,
        authID: authID,
        displayName: displayName
    }
}

export const startEditPost = (updates,postID, authID, displayName) =>{
    return (dispatch, getState) =>{
        return database.ref(`/posts/${postID}`).set({
            authID: authID,
            displayName: displayName,
            ...updates
        }).then(()=>{
            dispatch(editPost(updates, postID, authID, displayName));

        });
    }
}


export const setPostsState = (posts) => {
    return {
        type: 'SET_POSTS_STATE',
        posts: posts
    }
}

export const startSetPostsState = () =>{
    return (dispatch) =>{
        return database.ref('/posts').once('value').then((snapshot)=>{
            const postsArr = [];
            snapshot.forEach((childSnapshot)=>{
                postsArr.push({
                    postID: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setPostsState(postsArr));   
        })
    }
}

export const removePost = (postID) =>{
    return {
        type: 'REMOVE_POST',
        postID: postID
    }
}

export const startRemovePost = (postID) =>{
    return(dispatch) => {
        return database.ref(`/posts/${postID}`).remove().then(()=>{
            dispatch(removePost(postID));
        })
    }
}