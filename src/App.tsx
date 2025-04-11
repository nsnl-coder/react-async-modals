import ModalContainer from './components/ModalContainer';
import TestModal from './components/TestModal';
import useModal from './hooks/useModal';

export default function App(): React.JSX.Element {
  const { openAsyncModal } = useModal();

  const handleButtonClick = async () => {
    const confirm = await openAsyncModal(TestModal, { text: 'jajajaj  ' });
    console.log(confirm);
  };

  return (
    <div>
      <button className="bg-black-400" onClick={handleButtonClick}>
        Open Modal
      </button>
      <ModalContainer />
    </div>
  );
}
