import React from "react";

export const getFormattedColumns = ({ data: { fields } }) => {

    
    return fields ? fields
        .map(field => { 
            if(field.id === 'avatar') {
                return { 
                    Header: field.name, 
                    accessor: field.id,
                    Cell: props => <img src={props.value !== null ? props.value : "https://robohash.org/default"} width="30" height="30" /> 
                };
            }
            return { 
                Header: field.name, 
                accessor: field.id,
                filterable: true,
                filterMethod: (filter, row) => row[filter.id]?.toLowerCase().indexOf(filter?.value?.toLowerCase()) > -1
            };
        }) : [];
}

export const getFormattedData = ({ data: { data, fields } }) => {
    

    const result = data ? data.map(robot => {
        
        const [id, first_name, last_name, email, title, avatar] = robot;

        return { id, first_name, last_name, email, title, avatar };
    }) : [];

    result.sort((robotA, robotB) => {
        const nameA = robotA.last_name.toUpperCase();
        const nameB = robotB.last_name.toUpperCase();

        if(nameA < nameB) {
            return -1;
          }

          if(nameA > nameB) {
            return 1;
          }
        
          return 0;
    });

    return result;
};
