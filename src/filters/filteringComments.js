export default (post) =>{
    
    const allComments = post.comments ? Object.values(post.comments) : 'no';        

   return allComments;
}


