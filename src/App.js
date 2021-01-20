import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

import BlogList from './Container/BlogList';
import Blog from './Component/Blog.js'
import './App.css'

import data from './Data/data.json'
import Navbar from './Component/NavBar';

function App() {

  const [blog, setBlog] = useState({
    id: "" ,
    category: "" ,
    title : "" ,
    postedOn: "" ,
    author: "" ,
    text: ""
  });

  const [clicked, setClicked] = useState("false")

  const [slug, setSlug] = useState("")

  useEffect(() => {
    let blog = data.blogs.find(blog => blog.slug === slug);
    setBlog(blog)
    setClicked("true")
    {console.log(blog)}
  },[slug])

  let blogClick=(e) => {
    let slug = e.target.value
    setSlug(slug)
  }

  const blogMap = data.blogs.map(blog => {
    return <div key={blog.id} className="blogMap">
        <p>{blog.title}</p>
        <p>{blog.author}</p>
        <button value={blog.slug} onClick={blogClick}>Go To {blog.title}</button>
        <NavLink to={`/blogs/${blog.slug}`}>blog link</NavLink>
    </div>
})

let renderBlogList = () => {
  return(
  <BlogList
    data={data.blogs}
    blogMap={blogMap}
  />
  )
}

let renderBlog = () => {
  return(
  <Blog
    blog={blog}
  />
  )
}

  return (
    <Router>
      <div className="App">
        <div>
        <Navbar/>
          Blog

        <Switch>
          <Route path="/blogs" render={() => renderBlogList() } />
          <Route path="/blogs/:slug"  render={() => renderBlog() }/>
        </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
