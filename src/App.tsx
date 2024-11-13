import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './assets/pages/MainPage/MainPage'
import Favorites from './assets/pages/Favorites/Favorites'

function App() {
  

  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path='/favorites' element={<Favorites />} />
    </Routes>
  )
}

export default App
