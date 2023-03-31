const filterPosts = (array) => {
    let data = [];
    array.forEach(blog => {

        data.push(blog.contentTag);

    });

    return data;


};
const useFilterImage = (posts) => {
    const blogPost = filterPosts(posts);
    const imgFilterd = blogPost.filter(item => item.includes("img"));

    return imgFilterd[0];
};

export default useFilterImage