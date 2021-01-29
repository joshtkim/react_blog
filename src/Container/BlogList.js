import React from 'react'
import { BrowserRouter as NavLink } from 'react-router-dom';

let BlogList = ({blog, blogMap, clicked}) => {

    return (
        <div className="blogList">
            {blogMap}
                <div className="soloPost">
                    {console.log(clicked)}
                    {clicked && blog ? 
                        <div>
                            <h3>{blog.title}</h3>
                            <p>{blog.category}</p>
                            <p>{blog.summary}</p>
                            <NavLink to={`/post/${blog.slug}`}>Go to {blog.title} Page</NavLink>
                        </div> 
                        : 
                        "Click on a blog for more info!"}
                </div>
        </div>
    )
}

export default BlogList