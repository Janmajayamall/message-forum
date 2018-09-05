import React from 'react';
import PostPage from './PostPage.js'
import {connect} from 'react-redux';
import { startEditPost, startRemovePost} from '../actions/post.js';

export const EditPost = (props) =>{
    return(
        <div>
            <h1>Edit Post</h1>
            {console.log(props.postToEdit)}
            {  props.authID === props.postToEdit.authID ? <PostPage post= {props.postToEdit} Submit= {(post)=>{
                                         const editedPost = {
                                             ...post}

                                            props.startEditPost(editedPost, props.postToEdit.postID, props.postToEdit.authID, props.postToEdit.displayName);
                                            props.history.push('/dashboard');
                                            }} /> :                                           
                                           <div>
                                            <h1> You are not allowed to edit this post </h1>
                                           </div>}
            <button onClick={()=>{
                                props.startRemovePost(props.postToEdit.postID);
                                props.history.push(`/postspecificpage/${props.postToEdit.postID}`);
                                }}>
                Delete Post
            </button>
                                            
        </div>
    );
}

const mapStateToProps = (state, props) =>{
    return{
        postToEdit: state.posts.find((post)=>post.postID === props.match.params.id),
        authID: state.auth.uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        startEditPost: (updates, postID, authID, displayName) => {dispatch(startEditPost(updates, postID, authID, displayName))},
        startRemovePost : (postID) => {dispatch(startRemovePost(postID))} 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);


