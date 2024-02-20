import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './components/defaultLayout'
import { Publications } from './pages/publications'
import { Post } from './pages/post'

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Publications />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  )
}
