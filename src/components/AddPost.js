import {connect} from 'react-redux';
import PostPage from './PostPage.js';
import React from 'react';
import {startNewPost} from './../actions/post.js';


export const AddPost = (props)=>{
    return(
        <div>
            <h1>Add New Post</h1>
            <PostPage Submit= {(post)=>{
                const newPost = {
                    authID: props.auth.uid,
                    displayName: props.auth.displayName,
                    ...post
                }
                props.startNewPost(newPost);
                props.history.push('/dashboard');
            }}/>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return{
        auth : state.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        startNewPost : (newPost) =>{dispatch(startNewPost(newPost))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost); 