function formatColumn(str) {
  var i,
    frags = str.split("_");
  for (i = 0; i < frags.length; i++) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }
  return frags.join(" ");
}

export const getFormattedColumns = ({ data }) => {
  let formattedColumns = [];
  if (data.length > 0) {
    const columnJson = data[0];
    for (const key in columnJson) {
      formattedColumns.push({
        Header: key === "id" ? key.toUpperCase() : formatColumn(key),
        accessor: key.toLowerCase(),
      });
    }
  }

  return formattedColumns;
};
export const getFormattedData = ({ data }) => [];
