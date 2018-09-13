import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout, startLogin } from '../actions/auth';
import {startSearch} from './../actions/postSelectors'

export class Header extends React.Component { 
  
  constructor(props){
    super(props);

    this.state={
      searchText: "",
      tagSearch: ""
    }
  }


  onSearchTextChange = (e) => {
    const newSearchText = e.target.value;

    this.setState(()=>{
      return{
        searchText: newSearchText
      }
    });

    this.search("SET_TEXT_SEARCH",newSearchText);

  }

  onTagTextChange = (e) => {
    const newTagText = e.target.value;

    this.setState(()=>{
      return{
        tagSearch: newTagText
      }
    });

    this.search("SET_TAG_SEARCH",newTagText);

  }

  search = (type,searchString) => {
    if(type==="SET_TEXT_SEARCH"){
      this.props.startSearch([
       searchString.trim(),
       this.state.tagSearch
     ]);
    }
    else if(type==="SET_TAG_SEARCH"){
      this.props.startSearch([
       this.state.searchText,
       searchString.trim()
     ]);
    }
   }


  
  render(){
  return (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Message_Forum</h1>
        </Link>
      
      <div>
        { this.props.userPresent === false ? <button className="button button--link" onClick={this.props.startLogin}>Login</button>:
        <button className="button button--link" onClick={this.props.startLogout}>Logout</button>  }
      </div>
      </div>
      <div className="header__content">
       <div >
        {this.props.userPresent === true ? <Link className="button" to='/addpost'>Post something new</Link>  : <p></p>}
       </div>
       <form>
        <input placeholder="Search Post" value={this.state.searchText} onChange={this.onSearchTextChange} />
        <input placeholder="Search Type" value={this.state.tagSearch} onChange={this.onTagTextChange} />
       </form>
      </div>
    </div>
  </header>
);
  }}

const mapStateToProps = (state) => {
  return{
    userPresent: state.auth.anyUser,
    currentSelectors: state.selectors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  startLogout: () => {dispatch(startLogout())},
  startLogin: () => {dispatch(startLogin())},
  startSearch: (newArray) => {dispatch(startSearch(newArray))}
}}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
