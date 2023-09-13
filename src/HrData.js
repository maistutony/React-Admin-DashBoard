import * as XLSX from "xlsx/xlsx.mjs";

let excelData = []; // This variable will hold the Excel data

// Function to fetch and convert Excel data
const fetchExcelData = async () => {
  // Fetch and convert the Excel data using XLSX
  // For example: excelData = [...convertedData];
           fetch(process.env.PUBLIC_URL + "/Absenteeism_at_work_Project.xls")
             .then((response) => response.arrayBuffer())
             .then((data) => {
               const workbook = XLSX.read(data, { type: "array" });
               const firstSheetName = workbook.SheetNames[0];
               const worksheet = workbook.Sheets[firstSheetName];
               const jsonData = XLSX.utils.sheet_to_json(worksheet);
               excelData=[...jsonData];
             });
};
export const setExcelData = (newData) => {
  excelData = newData;
};
console.log(excelData)
const customDataProvider = {
  getList: async (resource, params) => {
    if (excelData.length === 0) {
      await fetchExcelData();
    }

    // Return a subset of data based on pagination
    const startIndex = (params.pagination.page - 1) * params.pagination.perPage;
    const endIndex = params.pagination.page * params.pagination.perPage;
    const dataSubset = excelData.slice(startIndex, endIndex);

  return {
    data: dataSubset,
    total: excelData.length,
  };
  },
  // Implement other CRUD methods as needed
};

export default customDataProvider;
