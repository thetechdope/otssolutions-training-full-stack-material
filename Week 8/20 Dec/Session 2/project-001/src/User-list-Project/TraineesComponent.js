import React, { createContext, useEffect, useState } from "react";
import {
  Header,
  Input,
  Button,
  Dropdown,
  Popup,
  Icon,
} from "semantic-ui-react";
import AddEditUser from "./Modal/AddEditUser";
import TraineesList from "./TraineesList";
import UsersData from "./UsersData";
export const EditedContext = createContext();

const TraineesComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [traineesList, setTraineesList] = useState([]);
  const [searchedTraineesList, setSearchedTraineesList] = useState([]);
  //   const [cityOptions, setCityOptions] = useState([]);

  const options = [
    {
      key: "ascending",
      text: "Ascending Order",
      value: "ascending",
    },
    {
      key: "descending",
      text: "Descending Order",
      value: "descending",
    },
  ];

  const stateOptions = [
    {
      key: "up",
      text: "Uttar Pradesh",
      value: "up",
    },
    {
      key: "uk",
      text: "Uttrakhand",
      value: "uk",
    },
  ];

  useEffect(() => {
    setTraineesList(UsersData);
  }, []);

  useEffect(() => {
    if (searchTerm !== "") {
      const filteredData = UsersData.filter((trainee) =>
        trainee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchedTraineesList(filteredData);
    }
  }, [searchTerm]);

  useEffect(() => {
    let ascending = UsersData.sort((a, b) => {
      let fa = a.firstName;
      let fb = b.firstName;
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    if (name === "ascending") {
      console.log(ascending);
      setSearchedTraineesList(ascending);
      setName("");
    } else if (name === "descending") {
      setSearchedTraineesList(ascending.reverse());
      setName("");
    }
  }, [name]);

  const deleteItems = (items) => {
    const deleteItem = traineesList.filter((item, i) => {
      if (items.index === i) {
        return false;
      } else {
        return true;
      }
    });
    setSearchedTraineesList(deleteItem);
    setTraineesList(deleteItem);
  };

  const getAddOrEditData = (item) => {
    if (item.index === undefined) {
      // For Adding
      setTraineesList((pre) => [...pre, item]);
    } else {
      // For Editing Existing Data
      const actualData = searchedTraineesList.map((list, i) => {
        if (item.index === i) {
          return { ...item };
        } else return list;
      });
      setSearchedTraineesList(actualData);
      setTraineesList(actualData);
    }
  };

  return (
    <>
      <Header as="h1">Trainees</Header>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "1rem",
          padding: 0,
        }}
      >
        <Popup
          trigger={
            <Input
              style={{ width: "15rem", margin: 5 }}
              icon={{ name: "search", circular: true, link: true }}
              placeholder="Search Name"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          }
          content="You may search by Name"
          on="focus"
        />
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Button.Group color="blue" style={{ margin: 5 }}>
            <Button>Sort</Button>
            <Dropdown
              className="button"
              icon={name === "ascending" ? "angle up" : " angle down"}
              options={options}
              onChange={(e, { value }) => setName(value)}
              trigger={<></>}
            />
          </Button.Group>
          {/* <Button.Group color="blue" style={{ margin: 5 }}>
            <AddEditUser
              name="add"
              size="large"
              btnName="Add User"
              title="Add User"
            />
          </Button.Group> */}
        </div>
      </div>

      <div style={{ margin: "1rem" }}>
        <EditedContext.Provider value={[getAddOrEditData, deleteItems]}>
          <TraineesList
            trainees={searchTerm === "" ? traineesList : searchedTraineesList}
          />
        </EditedContext.Provider>
      </div>
    </>
  );
};

export default TraineesComponent;
