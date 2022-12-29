import React, { useState } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import "./App.css";

import Component1 from "./Modal_Implementation/Component1";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Component1 />

      <br />
      <br />

      <button onClick={() => setOpenModal(true)}>Open Modal</button>

      {openModal && (
        <Modal onClose={() => setOpenModal(false)} open={openModal}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>
                We've found the following gravatar image associated with your
                e-mail address.
              </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={() => setOpenModal(false)}>
              Nope
            </Button>
            {/* <Button
              content="Yep, that's me"
              labelPosition="right"
              icon="checkmark"
              onClick={() => setOpen(false)}
              positive
            /> */}
          </Modal.Actions>
        </Modal>
      )}
    </div>
  );
}

export default App;
