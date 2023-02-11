import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home.'
import Posts from './Components/Post/Posts';

const App = () => {


  return (
    <div>
      <Routes>
        <Route exact path={'/'} element={<Home />}></Route>
        <Route exact path={'/post'} element={<Posts />}></Route>
      </Routes>
    </div>
  )
}

export default App