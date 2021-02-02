import React from 'react'
import { BrowserRouter as NavLink, Link } from 'react-router-dom';

let BlogList = ({blog, blogMap, clicked}) => {

    return (
        <div className="blogList">
            {blogMap}
                <div className="soloPost">
                    {clicked && blog ? 
                        <div>
                            <h3>{blog.title}</h3>
                            <p>{blog.summary}</p>
                            <Link to={`/post/${blog.slug}`}>Page</Link>
                        </div> 
                        : 
                        "Click on a blog for more info!"}
                </div>
        </div>
    )
}

export default BlogList