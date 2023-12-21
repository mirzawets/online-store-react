import React, { useState } from 'react';
import axios from 'axios';
import { IProduct } from '../models';
import ErrorMessage from './ErrorMessage';

const productData: IProduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  category: 'electronic',
  image: 'https://i.pravatar.cc',
  rating: {
    rate: 42,
    count: 10,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export default function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (value.trim().length === 0) {
      setError('Please enter a title');
      return;
    }

    productData.title = value;

    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);

    onCreate(response.data);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        className='border rounded py-2 px-4 mb-2 w-full outline-0'
        placeholder='Enter product title...'
        value={value}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button type='submit' className='border rounded py-2 px-4 bg-green-400 hover:text-white'>
        Create
      </button>
    </form>
  );
}
