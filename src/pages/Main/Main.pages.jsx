import React from 'react';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard.component';
import { MainCtr, PageTitle, EmployeeCtr } from './Main.styled';
import data from '../../data';

const Main = () => {
  return (
    <MainCtr>
      <PageTitle>Robots-R-Us</PageTitle>
      <EmployeeCtr>
        {data.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </EmployeeCtr>
    </MainCtr>
  );
};

export default Main;
