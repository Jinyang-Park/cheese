import { useState } from 'react';

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const clickModal = (title) => {
    setSelectedTitle(title);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setSelectedTitle(null);
    setIsOpenModal(false);
  };
  return { isOpenModal, selectedTitle, clickModal, closeModal };
};

export default useModal;
