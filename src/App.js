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
    summary: "",
    text: ""
  });

  const [clicked, setClicked] = useState(false)

  const [slug, setSlug] = useState("")

  useEffect(() => {
    let blog = data.blogs.find(blog => blog.slug === slug);
    setBlog(blog)
  },[slug])

  let blogClick=(e) => {
    let slug = e.target.value
    setClicked(true)
    setSlug(slug)
  }

  const blogMap = data.blogs.map(blog => {
    return <div key={blog.id} className="blogMap">
        <p>{blog.title}</p>
        <button value={blog.slug} onClick={blogClick}>Info</button>
    </div>
})

let renderBlogList = () => {
  return(
  <BlogList
    blog={blog}
    blogMap={blogMap}
    clicked={clicked}
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

        <Switch>
          <Route path="/blogs" render={() => renderBlogList() } />
          <Route path="/post/:slug"  render={() => renderBlog() }/>
        </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
