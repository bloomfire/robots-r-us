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

import React from "react";
import Axios from 'axios';

// Import React Table
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

class RootComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
            columns: []
        };
    }

    render() {
        return (
            <>
                <h1>Robots-R-Us</h1>
                <ReactTable
                    data={this.state.data} // should default to []
                    columns={this.state.columns}
                    loading={this.state.loading}
                    onFetchData={(state, instance) => {
                        // fetch your data
                        Axios.get('http://localhost:3001/api/employees', {})
                            .then((res) => {
                                // Update react-table
                                this.setState({
                                    data: res.data.data.map(item => {
                                        return {
                                            id: item[0],
                                            first_name: item[1],
                                            last_name: item[2],
                                            email: item[3],
                                            title: item[4],
                                            avatar: item[5]
                                        }
                                    }),
                                    columns: res.data.fields
                                        .filter(item => item.id !== "avatar" && item.id !== "id")
                                        .map(item => {
                                            return {
                                                Header: item.name,
                                                accessor: item.id
                                            }
                                        }),
                                    loading: false
                                })
                            })
                    }}
                />
            </>
        );
    }

};

export default RootComponent;