import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://fakestoreapi.com/products');
      setProducts(result.data);
    }
    fetchData();
  });

  return (
    <div className='max-w-xl px-4 md:px-0 py-12 mx-auto'>
      <h1 className='text-3xl text-fuchsia-600 font-bold underline'>
        Welcome to Fake Store!
      </h1>
      <div className='mt-6 flex flex-wrap -mx-2'>
        {products.map((product) => (
          <div className='w-full md:w-1/2 lg:w-1/3 px-2 mb-4'>
            <div className='bg-white rounded shadow overflow-hidden'>
              <img className='w-full p-4' src={product.image} alt={product.title} />
              <div className='px-6 py-4'>
                <div className='font-bold text-xl text-fuchsia-500 mb-2'>{product.title}</div>
                <p className='text-gray-700 text-base'>{product.description.substring(1, 75)}</p>
              </div>
              <div className='px-6 border-t py-4'>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                  $ {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
