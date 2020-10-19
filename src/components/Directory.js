import React from 'react';
import Employee from './Employee';

const Directory = ({data}) => {
    return (
        <div className='directory-container'>
            Employee Directory Component
            {data.map(d => {
                return (
                    <Employee employeeData={d} />
                )
            })}
        </div>
    )
}

export default Directory