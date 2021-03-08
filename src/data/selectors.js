export const getFormattedColumns = ({ data }) => {
  // if (data.fields) {
  //   return data.fields.map((field) => {
  //     const { id, name } = field;
  //     return {
  //       Header: name,
  //       accessor: id,
  //     };
  //   });
  // }
  // return [];
  const formattedColumns = [];
  if (Array.isArray(data)) {
    const columnKeys = Object.keys(data[0]);
    for (let i = 0; i < columnKeys.length; i++) {
      const columnKey = columnKeys[i];
      const accessor = columnKey;
      const formattedColumn = { accessor };
      switch (columnKey) {
        case 'id':
          formattedColumn.Header = 'ID';
          break;
        case 'first_name':
          formattedColumn.Header = 'First Name';
          break;
        case 'last_name':
          formattedColumn.Header = 'Last Name';
          break;
        case 'email':
          formattedColumn.Header = 'Email Address';
          break;
        case 'title':
          formattedColumn.Header = 'Job Title';
          break;
        case 'avatar':
          formattedColumn.Header = 'Profile Picture';
          break;
        default:
          continue;
      }
      formattedColumns.push(formattedColumn);
    }
  }
  return formattedColumns;
};
export const getFormattedData = ({ data }) => {
  // if (data.data) {
  //   return data.data
  //     .map((robot) => {
  //       return {
  //         id: robot[0],
  //         first_name: robot[1],
  //         last_name: robot[2],
  //         email: robot[3],
  //         title: robot[4],
  //         avatar: robot[5],
  //       };
  //     })
  //     .sort((a, b) => a.last_name.localeCompare(b.last_name));
  // }
  if (Array.isArray(data)) {
    return data
      .map(({ id, first_name, last_name, email, title, avatar }) => {
        return {
          id,
          first_name,
          last_name,
          email,
          title,
          avatar,
        };
      })
      .sort((a, b) => a.last_name.localeCompare(b.last_name));
  }
};
