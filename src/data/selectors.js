export const getFormattedColumns = ({ data }) => {
    let columns = []
    if (data != null) {
    for (const key in data[0]) {
        columns.push(key)
    }
    columns = columns.map((key) => {
        switch (key) {
            case "id":
                return { Header: "Id", accessor: key, show: false }
            case "first_name":
                return { Header: "First Name", accessor: key }
            case "last_name":
                return { Header: "Last Name", accessor: key }
            case "email":
                return { Header: "Email Address", accessor: key }
            case "title":
                return { Header: "Job Title", accessor: key }
            case "avatar":
                return { Header: "Avatar", accessor: key }
            default:
                break;
        }
    })
}   
    columns.push(columns);
    return columns

};
export const getFormattedData = ({ data }) => {
    if (data != null) {
        return [data].map(({
            id, first_name, last_name, email, title, avatar
        }) => {
            return {
                id, first_name, last_name, email, title, avatar
            };

        }
        )
    }
    return [];
};
