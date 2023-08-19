import './App.css'
import Error404 from './Components/Error404/Error404';
import Header from './Components/Header/Header'
import Inventory from './Components/Inventory/Inventory';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Review from './Components/Review/Review';
import Shop from './Components/Shop/Shop'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      <div>
      <Header></Header>

        <Router>
          <Routes>
            <Route path='/shop' element={<Shop />}></Route>
            <Route path='/review' element={<Review />}></Route>
            <Route path='/inventory' element={<Inventory />}></Route>
            <Route path='/' element={<Shop />}></Route>
            <Route path='/product/:productKey' element={<ProductDetail />}></Route>
            <Route path='*' element={<Error404 />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;
