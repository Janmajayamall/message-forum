import React from 'react';
import {Link} from 'react-router-dom';
import PostList from './PostList.js';
import {connect} from 'react-redux';
import getFilteredPosts from './../selectors/getFilteredPosts';

export const DashboardPage = (props) => (

  <div className="content-container">
    <div>
      <div>
        {props.posts.map((post)=>{
          return (
            <div key={post.postID} className="postList">
            <PostList  post={post} />
            </div>)
        })}
      </div>


    </div>
  </div>
);

const mapStateToProps = (state) =>{
  return{
    posts: getFilteredPosts(state.posts, state.selectors)
  }
}


export default connect(mapStateToProps)(DashboardPage);
