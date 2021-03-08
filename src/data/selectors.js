export const getFormattedColumns = ({ data }) => {
  if (data.fields) {
    return data.fields.map((field) => {
      const { id, name } = field;
      return {
        Header: name,
        accessor: id,
      };
    });
  }
  return [];
};
export const getFormattedData = ({ data }) => {
  if (data.data) {
    return data.data
      .map((robot) => {
        return {
          id: robot[0],
          first_name: robot[1],
          last_name: robot[2],
          email: robot[3],
          title: robot[4],
          avatar: robot[5],
        };
      })
      .sort((a, b) => a.last_name.localeCompare(b.last_name));
  }
};
