import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const [params] = useSearchParams();
  const [product, setProduct] = useState({});
  const id = params.get('id');

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://fakestoreapi.com/products/' + id);
      setProduct(result.data);
    }
    fetchData();
  }, []);

  if (product === {}) {
    return (
      <div className='min-h-screen p-4 text-center bg-gray-100'>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className='bg-gray-100'>
      <div className='max-w-3xl min-h-screen px-4 pt-8 pb-12 mx-auto md:px-0'>
        <h1 className='text-3xl font-bold text-fuchsia-600'>Product Detail</h1>
        <a href='/' className='block pt-4 underline'>
          Back to main page
        </a>
        <div className='mt-8 overflow-hidden bg-white rounded shadow'>
          <img className='w-full p-4' src={product.image} alt={product.title} />
          <div className='px-6 py-4'>
            <div className='mb-2 text-xl font-bold text-fuchsia-500'>
              {product.title}
            </div>
            <p className='text-base text-gray-700'>{product.description}</p>
          </div>
          <div className='px-6 py-4 border-t'>
            <span className='inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full'>
              $ {product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
