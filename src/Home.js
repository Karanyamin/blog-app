import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    /* const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]); */

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState('Soprano');

    const handleDelete = (blogID) => {
        const newBlog = blogs.filter((blog) => (blog.id !== blogID))
        setBlogs(newBlog)
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setBlogs(data);
                console.log(data);
                setIsLoading(false);
            });
    }, []);



    return ( 
        <div className="home"> 
        {isLoading && <div>Page is Loading</div>} 
        {
            blogs && <BlogList blogs={blogs} title='List of All Blogs' handleDelete={handleDelete} />
        }
        {
            blogs && <BlogList blogs={blogs.filter(({author}) => (author === 'mario'))} title="List of Mario's Blogs"  handleDelete={handleDelete} />
        }
            <button onClick={() => setName('Tony')}>Use Effect Button</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;