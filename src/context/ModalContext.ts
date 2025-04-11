import React, { createContext } from 'react';
import { AsyncModalFunction } from './ModalContextProvider';

export interface IModal {
  resolve: (payload: unknown) => void;
}

interface IModalContext {
  modals: React.JSX.Element[];
  openAsyncModal: AsyncModalFunction;
  closeLastModal: () => void;
}

const ModalContext = createContext<IModalContext>({
  modals: [],
} as any);

export default ModalContext;
