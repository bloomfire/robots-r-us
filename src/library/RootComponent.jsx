// Eventually we need our data to look like this....

// const formattedColumns = [
//   { Header: "ID", accessor: "id" },
//   { Header: "First Name", accessor: "first_name" },
//   { Header: "Last Name", accessor: "last_name" },
//   { Header: "Email Address", accessor: "email" },
//   { Header: "Job Title", accessor: "title" },
//   { Header: "Profile Picture", accessor: "avatar" },
// ];

// const formattedData = [
//   { id: 1, first_name: "Red", last_name: "Pudner", email: "rpudner0@shareasale.com", title: "Pharmacist", avatar: '...' },
//   { id: 2, first_name: "Olva", last_name: "Kellegher", email: "okellegher1@prlog.org", title: null, avatar: '...' },
//   { id: 3, first_name: "Byrle", last_name: "Dick", email: null, title: null, avatar: '...' },
//   { id: 4, first_name: "Cecile", last_name: "Rainton", email: "crainton3@artisteer.com", title: "Recruiter", avatar: '...' },
//   { id: 5, first_name: "Gwennie", last_name: "Clancy", email: "gclancy4@ifeng.com", title: "Chief Design Engineer", avatar: '...' },
//   { id: 6, first_name: "Meriel", last_name: "Form", email: "mform5@mozilla.org", title: null, avatar: '...' },
// ...
// ];

import React, { useEffect, useState } from "react";
import { data, fields } from "../data.json";

// Import React Table
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import styled from "styled-components";

const formattedColumns = fields.slice(1).map((field) => {
  if (field.id === "avatar") {
    return {
      Header: field.name,
      accessor: field.id,
      Cell: (props) => (
        <img
          src={`${
            props.value ?? "https://robohash.org/default?size=100x100"
          }`}
          alt="avatar"
        />
      ),
    };
  }
  return {
    Header: field.name,
    accessor: field.id,
  };
});

const formattedData = data.map((employee) => ({
  id: employee[0],
  first_name: employee[1],
  last_name: employee[2],
  email: employee[3],
  title: employee[4],
  avatar: employee[5],
})).sort((a, b) => {
  if (a.last_name < b.last_name) {
    return -1
  }

  if (a.last_name > b.last_name) {
    return 1
  }

  return 0
});

const RootComponent = () => {
  const [fetchedData, setFetchedData] = useState([]);

  // You can use format the data on the backend
  // or if you're familiar with Redux, you can do it in the selector...
  // formattedColumns = useSelector(Selectors.getFormattedColumns);
  // formattedData = useSelector(Selectors.getFormattedData);

  // or you can manipulate the hardcoded directly in the data.json file...
  // formatted Data = data.map(...);

  // All are viable options, and we will not think less of either solution!
  // No matter _how_ you do it, we just need to see the data manipulated into the correct shape :)

  useEffect(() => {
    fetch("http://localhost:3001/api/employees")
      .then((response) => response.json())
      .then((data) => setFetchedData(data));
  });

  return (
    <Container>
      <h1>Robots-R-Us</h1>
      <div data-testid="employee-table">
        <ReactTable columns={formattedColumns} data={formattedData} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px 50px;
`;

export default RootComponent;
