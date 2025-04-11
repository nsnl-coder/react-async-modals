import { PropsWithChildren, useState } from 'react';
import ModalContext, { IModal } from './ModalContext';

export type AsyncModalFunction = <P extends IModal>(
  modal: (props: P) => React.JSX.Element,
  props: Omit<P, 'resolve'>,
) => void;

export default function ModalContextProvider(
  props: PropsWithChildren,
): React.JSX.Element {
  const [modals, setModals] = useState<React.JSX.Element[]>([]);

  const closeLastModal = () => {
    setModals((prev) => prev.slice(0, prev.length - 1));
  };

  const openAsyncModal: AsyncModalFunction = (Modal, props) => {
    return new Promise((resolve) => {
      const resolveAndCloseModal = (payload: any) => {
        resolve(payload);
        closeLastModal();
      };

      const modalProps = {
        ...props,
        resolve: resolveAndCloseModal,
      } as any;

      const newModal = <Modal {...modalProps} key={Math.random()} />;
      setModals((prev) => [...prev, newModal]);
    });
  };

  return (
    <ModalContext.Provider value={{ modals, openAsyncModal, closeLastModal }}>
      {props.children}
    </ModalContext.Provider>
  );
}
