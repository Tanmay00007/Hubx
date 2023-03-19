
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react'
import SharedLayout from './pages/SharedLayout'
import Graph from './pages/Graph'
import Form from './pages/Form'

const App = () => {
  return (
    <div className='body'>
   <BrowserRouter>
    <Routes>
    <Route path='/' element={<SharedLayout />}>
    <Route index element={<Graph />} />
    <Route path='/form' element={<Form />} />
    </Route>
    </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App