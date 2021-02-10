import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../data/index";
import { data, fields, field_types } from '../data.json';

const RootComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Actions.getData());
  }, [dispatch]);

  return (
    <h1>Robots-R-Us</h1>
  );
};

export default RootComponent;