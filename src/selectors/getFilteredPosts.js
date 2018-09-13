

export default (posts, selectors) => {
    return posts.filter((post)=> {

        const text = selectors[0] ? post.postTitle.toLowerCase().includes(selectors[0].toLowerCase()) : true;

        let count = 1;
        let givenTagArray = post.tags.split(" ");
        let tagSearchMatch = true;
        
        if(selectors[1]){ 
            
            givenTagArray.forEach((element) => {
            count = count +1;
            if(element.toLowerCase().includes(selectors[1].toLowerCase())){
                tagSearchMatch = true;
                console.log('ass')
            }
            if(count === givenTagArray.length){
                tagSearchMatch = false
                console.log('fuck')
            }
                })

             };

        
        
        return text && tagSearchMatch;
    });

}
