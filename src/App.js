import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'


function App() {
  return (
    <>
      <Router>
        <Home/>
        <Routes>
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>


      <div className='container-fluid text-center mt-2 pt-5 bg-dark text-light'>
        <div className='row'>

          <div className='col-sm-2' ></div>
          <div className='col-md-2'>
            <h5>Order Now</h5>
            <p>Deals</p>
            <p>Pizza</p>
            <p>Desserts</p>
          </div>

          <div className='col-md-2'>
            <h5>About</h5>
            <p>About us</p>
            <p>Location</p>
            <p>Terms & Conditions</p>
          </div>

          <div className='col-md-2'>
            <h5>Our Policies</h5>
            <p>Contactless Delivery</p>
            <p>Membership</p>
            <p>Career</p>
          </div>

          <div className='col-md-2 '>
            <h5>Careers</h5>
            <p>Careers</p>
            <p>Location</p>
            <p>Terms & Conditions</p>
          </div><hr></hr>

          <div className='col-md-12'>
              <p>Copyright © 2022 - 2024 FoodSite.com.</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
