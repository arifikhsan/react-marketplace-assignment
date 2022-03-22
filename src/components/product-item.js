import { Component } from 'react';

class ProductItem extends Component {
  render() {
    const { product } = this.props;

    const toDetailPage = () => {
      window.location.href = '/product?id=' + this.props.product.id;
    };

    return (
      <div
        onClick={toDetailPage}
        className='w-full px-2 mb-4 cursor-pointer md:w-1/2 lg:w-1/3'>
        <div className='overflow-hidden bg-white rounded shadow'>
          <img className='w-full p-4' src={product.image} alt={product.title} />
          <div className='px-6 py-4'>
            <div className='mb-2 text-xl font-bold text-fuchsia-500'>
              {product.title}
            </div>
            <p className='text-base text-gray-700'>
              {product.description.substring(1, 75)}
            </p>
          </div>
          <div className='px-6 py-4 border-t'>
            <span className='inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full'>
              $ {product.price}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
