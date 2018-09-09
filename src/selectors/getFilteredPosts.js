

export default (posts, selectors) => {
    return posts.filter((post)=> {
        console.log(post);
        const text = selectors[0] ? post.postTitle.toLowerCase().includes(selectors[0].toLowerCase()) : true;

        return text;
    });

}
