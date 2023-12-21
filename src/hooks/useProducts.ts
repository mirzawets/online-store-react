import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { IProduct } from '../models';

export function useProducts() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [products, setProducts] = useState<IProduct[]>([]);

  const addProduct = (product: IProduct) =>
    setProducts((prevStateProducts) => [...prevStateProducts, product]);

  async function fetchingProducts(url: string) {
    try {
      setError('');
      setLoading(true);

      const response = await axios.get<IProduct[]>(url);

      setProducts(response.data);
      setLoading(false);
    } catch (err: unknown) {
      setLoading(false);

      const error = err as AxiosError;

      setError(error.message);
    }
  }

  useEffect(() => {
    fetchingProducts('https://fakestoreapi.com/products?limit=5');
  }, []);

  return { loading, error, products, addProduct };
}
