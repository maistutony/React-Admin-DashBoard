// EmployeeList.js

import React from "react";
import { List, Datagrid, TextField,Pagination } from "react-admin";
import { PostFilterSidebar } from "./Components/FilterListItem";

const CustomPagination = (props) => {
  return <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
};
const EmployeeList = (props) =>(
    <List
      {...props}
      aside={<PostFilterSidebar />}
      pagination={<CustomPagination />}
    >
      <Datagrid>
        <TextField source="Name" />
        <TextField source="Age" />
        <TextField source="Department" />
        <TextField source="Position" />
        <TextField source="Salary" />

        {/* Add more fields as needed */}
      </Datagrid>
    </List>
  );
export default EmployeeList;
