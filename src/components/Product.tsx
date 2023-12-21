import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBg = details ? 'bg-blue-400' : 'bg-yellow-400';
  const btnClassNames = ['py-2 px-4 border rounded hover:text-white', btnBg];

  return (
    <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
      <img src={product.image} alt={product.title} className='w-1/6' />
      <p>{product.title}</p>
      <p className='font-bold'>{product.price}</p>

      <button
        className={btnClassNames.join(' ')}
        onClick={() => setDetails((prevStateDetails) => !prevStateDetails)}
      >
        {details ? 'Hide details' : 'Show details'}
      </button>

      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
}
