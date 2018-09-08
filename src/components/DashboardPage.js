import React from 'react';
import {Link} from 'react-router-dom';
import PostList from './PostList.js';
import {connect} from 'react-redux';
import { constants } from 'os';

export const DashboardPage = (props) => (

  <div className="content-container">
    <div>
      <div>
        {props.posts.map((post)=>{
          return (
            <div className="postList">
            <PostList key={post.postID} post={post} />
            </div>)
        })}
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) =>{
  return{
    posts: state.posts,
  }
}


export default connect(mapStateToProps)(DashboardPage);
