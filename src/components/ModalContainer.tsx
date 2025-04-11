import { useContext } from 'react';
import ModalContext from '../context/ModalContext';

export default function ModalContainer(): React.JSX.Element {
  const { modals } = useContext(ModalContext);

  return (
    <div>
      <div>Modal container</div>
      {modals}
    </div>
  );
}
