import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './components/Blog'
import Detail from './components/Detail'
import CreateBlog from './components/CreateBlog'
import Edit from './components/Edit'

const api = "http://localhost:3000/blogs"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/create' element={<CreateBlog/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </div>
  )
}

export default App