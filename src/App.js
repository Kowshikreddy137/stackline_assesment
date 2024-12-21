import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from './redux/productSlice';
import ProductDetails from './components/ProductDetails';
import Header from './components/header';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`)
    .then((response) => response.json())
      .then((data) => {
        dispatch(setProduct(data[0]));
      });
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      {product ? <ProductDetails product={product} /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
