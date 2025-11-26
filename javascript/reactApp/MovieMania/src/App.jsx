import React, { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import User from './pages/User';
import PageNoteFound from './pages/PageNoteFound';


function App() {


  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/user/:id' element={<User />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/dashboard" element={<Dashboard />} >
            <Route path='profile' element={<Profile />} />
            <Route path='settings' element={<Settings />} />
        </Route>
        <Route path='*' element={<PageNoteFound />} />
      </Routes>
  )
}

export default App
