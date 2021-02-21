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

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Actions, Selectors } from "../data/index";
import { data, fields, field_types } from '../data.json';

// Import React Table
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

const RootComponent = () => {
  let formattedColumns = [];
  let formattedData = [];

  // You can use format the data on the backend
  // or if you're familiar with Redux, you can do it in the selector...
  // formattedColumns = useSelector(Selectors.getFormattedColumns);
  // formattedData = useSelector(Selectors.getFormattedData);
  // or you can manipulate the hardcoded directly in the data.json file...
  // formatted Data = data.map(...);
  formattedColumns = fields
      .filter(item => item.id !== "avatar" && item.id !== "id")
      .map(item => {
          return {
              Header: item.name,
              accessor: item.id
          }
  });

  formattedData = data.map(item => {
      return {
          id: item[0],
          first_name: item[1],
          last_name: item[2],
          email: item[3],
          title: item[4],
          avatar: item[5]
      }
  })

  // All are viable options, and we will not think less of either solution!
  // No matter _how_ you do it, we just need to see the data manipulated into the correct shape :)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Actions.getData());
  }, [dispatch]);

  return (
    <>
      <h1>Robots-R-Us</h1>
      <ReactTable
        columns={formattedColumns}
        data={formattedData}
      />
    </>
  );
};

export default RootComponent;