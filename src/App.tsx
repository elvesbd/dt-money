import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/Global";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionMoadalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionMoadalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionMoadalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastar Transação</h2>
      </Modal>

      <GlobalStyles/>
    </>
  );
}