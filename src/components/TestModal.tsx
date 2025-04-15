import { IModal } from '../context/ModalContext';
import useModal from '../hooks/useModal';
import BackDrop from './BackDrop';

interface TestModalProps extends IModal {
  text: string;
}

export default function TestModal(props: TestModalProps): React.JSX.Element {
  const { openAsyncModal } = useModal();

  const { text, resolve } = props;
  const handleCloseModal = () => {
    resolve('test haahah');
  };

  const handleButtonClick = async () => {
    const confirm = await openAsyncModal(TestModal, { text: 'jajajaj  ' });
    console.log(confirm);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <BackDrop />
      <div className="bg-white w-96 p-4 z-10">
        {text}
        <button onClick={handleButtonClick}>Open modal</button>
        <button onClick={handleCloseModal} className="px-4 py-2 bg-green-600">
          Close Modal
        </button>
      </div>
    </div>
  );
}
