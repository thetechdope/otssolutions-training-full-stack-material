import React, { useEffect, useState } from "react";
import { Header, Input, Button, Dropdown, Icon } from "semantic-ui-react";
import TraineesList from "./TraineesList";

const TraineesComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [traineesList, setTraineesList] = useState([]);
  const [searchedTraineesList, setSearchedTraineesList] = useState([]);

  const mockTraineesData = [
    {
      firstName: "Rahul",
      lastName: "Rauniyar",
      email: "rahul@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Saurabh",
      lastName: "Singh",
      email: "saurabh@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Mohd.",
      lastName: "Ehtesham",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Arun",
      lastName: "Kumar",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Rahul",
      lastName: "Rauniyar",
      email: "rahul@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Saurabh",
      lastName: "Singh",
      email: "saurabh@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Mohd.",
      lastName: "Ehtesham",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Arun",
      lastName: "Kumar",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Rahul",
      lastName: "Rauniyar",
      email: "rahul@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Saurabh",
      lastName: "Singh",
      email: "saurabh@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Mohd.",
      lastName: "Ehtesham",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Arun",
      lastName: "Kumar",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
  ];

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

  const sortTraineesList = (sortingOrder) => {
    const ascendingOrderSorted = mockTraineesData.sort(function (a, b) {
      if (a.firstName < b.firstName) {
        return -1;
      } else if (a.firstName > b.firstName) {
        return 1;
      }
      return 0;
    });
    if (sortingOrder === "ascending") {
      setTraineesList(ascendingOrderSorted);
    } else if (sortingOrder === "descending") {
      setTraineesList(ascendingOrderSorted.reverse());
    }
  };

  useEffect(() => {
    setTraineesList(mockTraineesData);
  }, []);

  useEffect(() => {
    if (searchTerm != "") {
      const filteredData = mockTraineesData.filter((trainee) =>
        trainee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchedTraineesList(filteredData);
    }
  }, [searchTerm]);

  return (
    <>
      <Header as="h1">Trainees</Header>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "1rem",
        }}
      >
        <Input
          style={{ width: "25rem" }}
          icon={{ name: "search", circular: true, link: true }}
          placeholder="Search Name"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <Button.Group color="blue" style={{ marginLeft: "1rem" }}>
            <Button>Sort</Button>
            <Dropdown
              className="button icon"
              floating
              options={options}
              trigger={<></>}
              onChange={(e, data) => sortTraineesList(data.value)}
            />
          </Button.Group>
        </div>
        <div>
          <Button.Group color="blue" style={{ marginLeft: "1rem" }}>
            <Button>
              <Icon name="add" />
              Add Trainee
            </Button>
          </Button.Group>
        </div>
      </div>

      <div style={{ margin: "1rem" }}>
        <TraineesList
          trainees={searchTerm == "" ? traineesList : searchedTraineesList}
        />
      </div>
    </>
  );
};

export default TraineesComponent;
