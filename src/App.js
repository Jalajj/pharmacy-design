import React from 'react'
import MedicineView from './views/Medicines/MedicineView';
import SupplementsView from './views/Supplements/Supplements';
import Checkout from './views/Checkout/Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Category from './views/Category/Category';
import CompareMed from './views/CompareMed/CompareMed';
import ProductPage from './views/ProductPage/ProductPage';
import Auth from './views/Auth/Auth';
import UploadModal from './components/uploadModal/UploadModal';

function App() {
  return (
    <div style={{margin:0, padding:0, boxSizing:'border-box',backgroundColor:'#FDFAF6',  overflowX: 'hidden' }}>
       <Router>
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" exact element={<Auth />} />
        <Route path="/category" exact element={<Category />} />
        <Route path="/compare" exact element={<CompareMed />} />
        <Route path="/checkout" exact element={<Checkout />} />
        <Route path="/medication" exact element={<MedicineView />} />
        <Route path="/product" exact element={<ProductPage />} />
        <Route path="/supplements" exact element={<SupplementsView />} />
        <Route path="/upload" exact element={<UploadModal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
