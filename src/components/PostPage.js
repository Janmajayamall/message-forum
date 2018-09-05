import React from 'react';
import moment from 'moment';


export default class PostPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            postTitle:props.post ? props.post.postTitle:'',
            textArea:props.post ? props.post.textArea:'',
            createdAt:props.post ? props.post.createdAt: 0, 
            editedAt: props.post ? props.post.editedAt: 0
        }
    }
    
    postTitleChanged = (e) =>{
        const postNewTitle = e.target.value;
        this.setState(()=>{
            return{
                postTitle: postNewTitle
            }
        });
    }

    textAreaChanged = (e) =>{
        const newTextAreaValue = e.target.value;
        const timeStamp = moment().valueOf();
        this.setState(()=>{
            if(this.props.post){
                return{
                    textArea: newTextAreaValue,
                    editedAt: timeStamp
                }
            }else{
                return{
                    textArea: newTextAreaValue,
                    createdAt: timeStamp
                }
            }
            
        }) ;
    }


    onSubmit = (e) =>{
        e.preventDefault();

        const stateValue = this.state;

        this.props.Submit(stateValue);
        
        this.setState(()=>{
            return{
                textArea: '',
                createdAt: 0,
                editedAt: 0
        }});
        }

    render(){
        return(
            <form onSubmit = {this.onSubmit}>
                <input placeholder='Add Title here'
                    value={this.state.postTitle}
                    onChange={this.postTitleChanged}
                />
                <textarea 
                placeholder = 'Add Text Here'
                value = {this.state.textArea}
                onChange = {this.textAreaChanged}  />
                <button>Submit</button>
            </form>
        );
    }
}

