import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, isLoading, isError} = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();
    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
            console.log('Blog has been deleted')
        })
    }

    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {isError && <div>{isError}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;