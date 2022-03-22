import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from '../components/product-item';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://fakestoreapi.com/products');
      setProducts(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className='bg-gray-100'>
      <div className='max-w-3xl min-h-screen px-4 pt-8 pb-12 mx-auto md:px-0'>
        <h1 className='text-3xl font-bold text-fuchsia-600'>
          Welcome to The Fake Store!
        </h1>
        {products.length > 0 ? (
          <div className='flex flex-wrap mt-6 -mx-2'>
            {products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
        ) : (
          <p className='mt-6 text-center'>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
