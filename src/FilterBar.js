import React from 'react'

const FilterBar = (props) => {
    return (
        <div>
            <span>Sort by:</span>
                <select onChange={(e) => props.handleSort(e)}>
                    <option value="ID">Robot ID</option>
                    <option value="Alphabetically">Last Name</option >
                </select>
        </div>
    )
}

export default FilterBar