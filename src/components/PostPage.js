import React from 'react';
import moment from 'moment';


export default class PostPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            postTitle:props.post ? props.post.postTitle:'',
            textArea:props.post ? props.post.textArea:'',
            createdAt:props.post ? props.post.createdAt: 0, 
            editedAt: props.post ? props.post.editedAt: 0,
            tags: props.post ? props.post.tags: '',
            error: ""
        }
    }
    
    postTitleChanged = (e) =>{
        const postNewTitle = e.target.value.trim();
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

    onTagChanged = (e) => {
        const newTags = e.target.value;
        this.setState(()=> {
            return{
                tags: newTags
            }
        })
    }


    onSubmit = (e) =>{
        e.preventDefault();
        if (this.state.postTitle === "" && this.state.textArea !== "")  {
            this.setState(()=> {
                return{
                    error:"Please give a title to the post"
                }
            })
        }
        else if (this.state.postTitle !== "" && this.state.textArea === "")  {
            this.setState(()=> {
                return{
                    error:"Please write the body of the blog"
                }
            })
        }
        else if (this.state.postTitle === "" && this.state.textArea === "")  {
            this.setState(()=> {
                return{
                    error:"Please give a title and write the body of the blog"
                }
            })
        }
        else {
        const tagState = this.state.tags.trim();  
        this.setState(()=>{
            return{
                tags: tagState
            }
        })
        console.log(this.state);
        const stateValue = this.state;

        this.props.Submit(stateValue);
        
        this.setState(()=>{
            return{
                textArea: '',
                createdAt: 0,
                editedAt: 0,
                tags: ""
        }});}
        }

    render(){
        return(
            <form className="form" onSubmit = {this.onSubmit}>
                {this.state.error !== "" ? <p className="form__error">{this.state.error}</p>: <p></p>}
                <input placeholder='Add Title here'
                    value={this.state.postTitle}
                    onChange={this.postTitleChanged}
                />
                <textarea   
                placeholder = 'Add Text Here'
                value = {this.state.textArea}
                onChange = {this.textAreaChanged}  />
                <input placeholder='Related to?' onChange={this.onTagChanged} value={this.state.tags}/> 
                <button>Submit</button>
            </form>
        );
    }
}

