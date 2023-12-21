import React, { useContext } from 'react';
import { useProducts } from '../hooks/useProducts';
import { ModalContext } from '../context/ModalContext';
import { IProduct } from '../models';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import Product from '../components/Product';
import Modal from '../components/Modal';
import CreateProduct from '../components/CreateProduct';

export default function ProductsPage() {
  const { loading, error, products, addProduct } = useProducts();
  const { modal, openModal, closeModal } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    closeModal();
    addProduct(product);
  };

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}

      <button
        className='fixed bottom-5 right-5 rounded-full bg-red-700 text-2xl py-2 px-4 hover:text-white'
        onClick={openModal}
      >
        +
      </button>

      {modal && (
        <Modal title='Create new product' onClose={closeModal}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
    </div>
  );
}
