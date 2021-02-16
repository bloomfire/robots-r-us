export const getFormattedColumns = ({ data }) => {
    if (data != undefined && data.data != undefined) {
        return data.data.formattedColumns;
    }

    return [];
};
export const getFormattedData = ({ data }) => {
    if (data != undefined && data.data != undefined) {
        return data.data.formattedData;
    }

    return [];
};
