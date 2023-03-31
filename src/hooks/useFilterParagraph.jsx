const filterPosts = (array) => {
    let data = [];
    array.forEach(blog => {

        data.push(blog.contentTag);

    });

    return data;


};
const useFilterPargraph = (posts) => {
    const blogPost = filterPosts(posts);
    const paragraphFilterd = blogPost.filter(item => item.includes("<p"));
    return paragraphFilterd;
};

export default useFilterPargraph