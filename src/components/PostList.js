import React from 'react';
import {Link} from 'react-router-dom';

export default (props) =>{
    return(
        <div>
            <Link to={`/postspecificpage/${props.post.postID}`}>{props.post.postTitle}</Link>
            {props.post.displayName !== undefined ? <p>Posted By:{props.post.displayName}</p> : <p>Posted By: Anonymous</p>}
            <p>Posted at:{props.post.createdAt}</p>
            {props.post.editedAt !== 0 ? <p>Edited at:{props.post.editedAt}</p> : <p></p>}
        </div>
    );
}

