import React from 'react'
import Auth from './views/Auth/Auth';
import Category from './views/Category/Category';
import Checkout from './views/Checkout/Checkout';
import CompareMed from './views/CompareMed/CompareMed';
import Home from './views/Home/Home';
import ResponsiveHome from './views/Home/ResponsiveHome';
import MedicineView from './views/Medicines/MedicineView';
import ProductPage from './views/ProductPage/ProductPage';
import SupplementsView from './views/Supplements/Supplements';

function App() {
  return (
    <div style={{margin:0, padding:0, boxSizing:'border-box'}}>
     <Category />
    </div>
  );
}

export default App;
