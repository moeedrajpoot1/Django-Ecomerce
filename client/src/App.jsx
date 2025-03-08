import './App.css';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify

/* React Router Dom */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import ProductDeatils from './layouts/ProductDetails';
import Contact from './screens/Contact';
import NotFound from './layouts/NotFoundPage';
import SingleProduct from './screens/SingleProduct';
import Navigation from './layouts/Navigation';
import Login from './screens/Login';

function App() {
  return (
    <>
      <div className="bg-slate-400 p-8">
        <h1 className="text-5xl text-center font-bold text-slate-500">
          Multi Vendor
        </h1>
      </div>

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* Add ToastContainer here */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="dark"
        pauseOnHover
      />
    </>
  );
}

export default App;
