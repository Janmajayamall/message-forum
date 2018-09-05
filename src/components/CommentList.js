import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

export default class CommentList extends React.Component {
    constructor (props){
        super(props);

        this.state ={
            editedTextArea: this.props.commentText
        }
    }
    
    ontextAreaChange = (e) =>{
        const editedText = e.target.value;
        this.setState(()=>{
            return {
                editedTextArea: editedText
            }
        })
    }

    editExistingComment = (e) => {
        e.preventDefault();
        const editedCommentObject = {
            postID:this.props.postID,
            authID:this.props.authID,
            comment: this.state.editedTextArea,
            authUsername: this.props.authUsername 
        }

        this.props.onEditSubmit(this.props.commentID,editedCommentObject)
    }

    
    render(){
    return(
        <div>
        {console.log(this.props.editOn)}
        {this.props.editOn  !== true?
            <div>
            <h6>{this.props.authUsername}: {this.props.comment}</h6>
            { this.props.rightToEdit ? <Link to={`/postspecificpage/${this.props.postID}/${this.props.commentID}`}>Edit</Link>:<p></p>}
            </div>   :
            <form onSubmit={this.editExistingComment}>
            <textarea value={this.state.editedTextArea} onChange={this.ontextAreaChange} />
            <button>Update Comment</button>
            <button>Remove Comment</button>
            </form>
            }
        
        </div>
    );
}
}


