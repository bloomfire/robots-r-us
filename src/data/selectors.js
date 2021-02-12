const columnMapping = {
  id: "ID",
  first_name: "First Name",
  last_name: "Last Name",
  email: "Email Address",
  title: "Job Title",
  avatar: "Profile Picture",
};

export const getFormattedColumns = ({ data }) => {
  let formattedColumns = [];
  if (data.length > 0) {
    const columnJson = data[0];
    for (const key in columnJson) {
      if (columnMapping[key]) {
        formattedColumns.push({
          Header: columnMapping[key],
          accessor: key,
          show: key === "id" || key === "avatar" ? false : true,
        });
      }
    }
  }

  return formattedColumns;
};
export const getFormattedData = ({ data }) => {
  let formattedData = [];
  if (data.length > 0) {
    formattedData = data.map(
      ({ id, title, first_name, last_name, email, avatar }) => {
        return {
          id,
          first_name,
          last_name,
          email,
          title,
          avatar: avatar
            ? avatar
            : `https://ui-avatars.com/api?name=${first_name}+${last_name}`,
        };
      }
    );
  }
  return formattedData;
};
