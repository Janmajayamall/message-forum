import React from 'react';
import {connect} from 'react-redux';
import {startInsertNewComment} from './../actions/postComment.js'

class AddCommentPage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            textArea : ''
        }
    }

    textAreaChanged = (e) =>{
        const newComment = e.target.value;

        this.setState (() =>{
            return{
                textArea: newComment
            }
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const newComment = {
            authID: this.props.auth.uid,
            comment: this.state.textArea,
            postID: this.props.postID,
            authUsername: this.props.auth.displayName
            };
        this.props.startInsertNewComment(newComment);
        this.setState(()=>{
            return{
                textArea: ''
            }
        });
    }



    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <textarea
                    placeholder='Please add comment here'
                    value = {this.state.textArea}
                    onChange = {this.textAreaChanged}
                />
                <button>Post</button>

            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        auth : state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        startInsertNewComment : (newComment) => {dispatch(startInsertNewComment(newComment))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddCommentPage);