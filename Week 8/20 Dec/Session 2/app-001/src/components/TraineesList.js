import React, { useState, useEffect } from "react";
import { Table, Icon } from "semantic-ui-react";
import ShowNameModal from "./ShowNameModal";

const TraineesList = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTrainee, setSelectedTrainee] = useState("");
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    props.getUpdatedData(updatedData);
  }, [updatedData]);

  const editButtonClicked = (trainee) => {
    setOpenModal(true);
    setSelectedTrainee(trainee);
  };

  return (
    <>
      {props.trainees.length > 0 && (
        <Table fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {props.trainees.length > 0 &&
            props.trainees.map((trainee, index) => {
              return (
                <Table.Body key={index}>
                  <Table.Row>
                    <Table.Cell>
                      {trainee.firstName} {trainee.lastName}
                    </Table.Cell>
                    <Table.Cell>{trainee.email}</Table.Cell>
                    <Table.Cell>{trainee.gender}</Table.Cell>
                    <Table.Cell>
                      <Icon
                        name="edit"
                        onClick={() => {
                          editButtonClicked(trainee);
                        }}
                      />
                      <Icon name="zip" />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              );
            })}
        </Table>
      )}
      {openModal && (
        <ShowNameModal
          selectedTrainee={selectedTrainee}
          open={openModal}
          setOpenModal={setOpenModal}
          setUpdatedData={setUpdatedData}
        />
      )}
      <div>{props.trainees.length === 0 && <div>No Data Found!</div>}</div>
    </>
  );
};

export default TraineesList;
