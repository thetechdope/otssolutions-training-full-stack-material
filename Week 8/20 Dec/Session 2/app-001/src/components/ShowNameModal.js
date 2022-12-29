import React, { useCallback, useState, useEffect } from "react";
import { Modal } from "semantic-ui-react";

const ShowNameModal = ({ open, selectedTrainee, setOpenModal, setUpdatedData }) => {
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  useEffect(() => {
    setCurrentUserEmail(selectedTrainee.email);
  }, []);

  const saveEditedDetails = () => {
    setOpenModal(false);
    setUpdatedData({
      id: selectedTrainee.id,
      updatedEmail: currentUserEmail,
    });
  };

  return (
    <div>
      <Modal open={open}>
        <Modal.Header>
          Edit '{selectedTrainee.firstName} {selectedTrainee.lastName}' Details
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            Edit Email :
            <br />
            <input
              size={30}
              value={currentUserEmail}
              onChange={(e) => setCurrentUserEmail(e.target.value)}
            />
            <br />
            <br />
            <button onClick={() => setOpenModal(false)}>Close</button>
            <br />
            <br />
            <button onClick={() => saveEditedDetails()}>Save & Update</button>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default ShowNameModal;
