import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, isLoading, isError } = useFetch('http://localhost:8000/blogs')


   /*  const handleDelete = (blogID) => {
        const newBlog = blogs.filter((blog) => (blog.id !== blogID))
        setBlogs(newBlog)
    } */

   



    return ( 
        <div className="home"> 
        {isError && <div>{isError}</div>}
        {isLoading && <div>Page is Loading</div>} 
        {
            blogs && <BlogList blogs={blogs} title='List of All Blogs' />
        }
        {
            blogs && <BlogList blogs={blogs.filter(({author}) => (author === 'mario'))} title="List of Mario's Blogs"  />
        }
        </div>
     );
}
 
export default Home;