import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export default function Modal({ children, title, onClose }: ModalProps) {
  return (
    // <></> - укороченный синтаксис React.Fragment. Когда нам не нужен дополнительный <div/> для корнегого элемента
    <>
      <div className='fixed bg-black/50 top-0 right-0 bottom-0 left-0' onClick={onClose} />
      <div className='fixed w-[500px] bg-white rounded p-5 top-10 left-1/2 -translate-x-1/2'>
        <h1 className='text-2xl text-center mb-2'>{title}</h1>
        {children}
      </div>
    </>
  );
}
