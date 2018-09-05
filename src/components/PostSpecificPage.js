import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import AddCommentPage from './AddCommentPage.js';
import CommentList from './CommentList.js';
import { startSetComment } from '../actions/postComment.js';
import {startEditComment, startRemoveComment} from './../actions/postComment';


export const PostSpecificPage = (props) =>{

    return (
        <div>
            {props.startSetComment(props.match.params.id)}
            <h1>{props.filteredPost.postTitle}</h1>
            <p>{props.filteredPost.textArea}</p>
            <h5>Posted At: {props.filteredPost.createdAt}</h5>
            <h5>Last Edited At: {props.filteredPost.editedAt}</h5>
            {props.filteredPost.authID === props.authID ? <Link to={`/editpost/${props.filteredPost.postID}`} >Edit Post</Link> : <p></p>}
            {props.postComments.map((commentGiven)=>{
                return <CommentList key={props.postComments.indexOf(commentGiven)} comment={commentGiven.comment}
                                rightToEdit={commentGiven.authID === props.authID}
                                postID={props.filteredPost.postID}
                                commentID={commentGiven.commentID}
                                commentText={commentGiven.comment}
                                postID={commentGiven.postID}
                                authID={commentGiven.authID}
                                authUsername={commentGiven.authUsername}
                                editOn={props.match.params.commentID !== undefined ?
                                    (commentGiven.commentID === props.match.params.commentID ? 
                                    true: false) : false}
                                onEditSubmit={(commentID, editedCommentObject)=>{
                                    props.startEditComment(commentID, editedCommentObject);
                                    props.history.push(`/postspecificpage/${props.filteredPost.postID}`);
                                }}
                                onRemoveComment={(commentID)=>{
                                    props.startRemoveComment(commentID)
                                }}
                            />
            })}
            <AddCommentPage postID={props.filteredPost.postID} />
        </div>  
    );



}

const mapStateToProps = (state, props) =>{
    return {
        filteredPost : state.posts.find((post)=>post.postID === props.match.params.id),
        authID: state.auth.uid,
        postComments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        startSetComment: (postID) => {dispatch(startSetComment(postID))},
        startEditComment: (commentID, editedCommentObject) =>{dispatch(startEditComment(commentID, editedCommentObject))},
        startRemoveComment: (commentID) => {dispatch(startRemoveComment(commentID))}
    }
        
}

export default connect(mapStateToProps,mapDispatchToProps)(PostSpecificPage);

