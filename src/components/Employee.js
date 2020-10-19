import React from 'react';

const Employee = ({employeeData}) => {
    return (
        <div className='employee-card'>
            {employeeData.first_name + ' ' + employeeData.last_name}
        </div>
    )
}

export default Employee;