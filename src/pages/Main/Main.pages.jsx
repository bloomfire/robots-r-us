import React from 'react';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard.component';

const Main = (props) => (
  <div>
    <EmployeeCard employee={props.card} />
  </div>
);

export default Main;
