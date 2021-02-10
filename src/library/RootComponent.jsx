import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Actions, Selectors } from "../data/index";
import { data, fields, field_types } from '../data.json';

// Import React Table
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

const RootComponent = () => {
  const formattedColumns = useSelector(Selectors.getFormattedColumns);
  const formattedData = useSelector(Selectors.getFormattedData);

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