import { useContext } from 'react';
import ModalContext from '../context/ModalContext';

const useModal = () => {
  const { openAsyncModal } = useContext(ModalContext);

  return {
    openAsyncModal,
  };
};

export default useModal;
