
import './App.css'


/*  React Router Dom */
import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import ProductDeatils from "./screens/ProductDetails"
import Contact from './screens/Contact'
import NotFound from './layouts/NotFoundPage'
import AuthContext from './context/AuthContext'
function App() {
  

  return (
    <>
 
<div className='bg-slate-400 p-8 ' >
  <h1 className='text-5xl text-center font-bold text-slate-500'   >
Multi Vendor
  </h1>

</div>

   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product/:id' element={<ProductDeatils/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<NotFound/>}/>
    
    
    
    
    </Routes></BrowserRouter>
    </>
  )
}

export default App
