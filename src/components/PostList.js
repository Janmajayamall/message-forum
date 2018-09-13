import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';


export default (props) =>{
    return(
        <div className="postList__display">
            <Link className="postList__title" to={`/postspecificpage/${props.post.postID}`}>{props.post.postTitle}</Link>
            <div className="postList__attributes">{props.post.displayName !== undefined ? <p>Posted By:{props.post.displayName}</p> : <p>Posted By: Anonymous</p>}
            <p>Posted at: {moment.utc(props.post.createdAt).calendar()}</p>
            {props.post.editedAt !== 0 ? <p>Edited at:{moment.utc(props.post.editedAt).calendar()}</p> : <p></p>}
            </div>
        </div>
    );
}

