import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Logout = (props) => {
    const {modal, handleModal, setToken} = props;
  
    const toggleModal = () => {
        handleModal(!modal);
    }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Logout</ModalHeader>
        <ModalBody>
            Are you sure you want to Logout?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={setToken}>Yes</Button>
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Logout;