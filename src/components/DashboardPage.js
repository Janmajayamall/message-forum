import React from 'react';
import {Link} from 'react-router-dom';
import PostList from './PostList.js';
import {connect} from 'react-redux';

export const DashboardPage = (props) => (

  <div>
    <Link to='/addpost'>Post something new</Link>
    <div>
      <h2>Posts</h2>
      <div>
        {props.posts.map((post)=>{
          return (<PostList key={post.postID} post={post} />)
        })}
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) =>{
  return{
    posts: state.posts
  }
}


export default connect(mapStateToProps)(DashboardPage);
