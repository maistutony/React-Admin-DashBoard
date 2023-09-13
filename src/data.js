
import parseCSV from "./HrData"; // Your CSV parsing function

const csvDataProvider = {
  getList: async (resource, params) => {
    const data = await parseCSV(csvData); // Replace csvData with your actual CSV content
    // Implement filtering, sorting, and pagination logic based on params
    return {
      data,
      total: data.length,
    };
  },
  // Implement other data provider methods...
};

export default csvDataProvider;
// src/Admin.js
import React from "react";
import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider";
import { List, Datagrid, TextField } from "react-admin";

const AbsenteesismList = (props) =>
{
   return(
        <List {...props} resource="absenteesism" perPage={10}>
            <Datagrid>
                <TextField source="age" label="Employee ID" />
                {/* Add other fields here */}
            </Datagrid>
        </List>
    );
}
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="absenteesism" list={AbsenteesismList} />
    {/* Add other resources */}
  </Admin>
);

export default App;
