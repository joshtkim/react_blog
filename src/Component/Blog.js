import React from 'react'

let Blog = ({blog}) => {

    console.log(blog)

    return(
        <div className="blogPostContainer">
            <div className="blogHeader">
                <span className="blogCategory">{blog.category}</span>
                    <h1 className="postTitle">{blog.title}</h1>
                <span className="postedBy">posted on {blog.postedOn} by {blog.author}</span>
            </div>

            <div className="postContent">
                <h3>{blog.title}</h3>
                <p>{blog.text}</p>
            </div>
        </div>
   )
}

export default Blog