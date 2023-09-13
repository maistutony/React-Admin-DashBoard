// App.js
import React from "react";
import {Admin, Resource} from "react-admin";
import dataProvider from "./dataProvider"; // Import your data provider
import EmployeeList from "./EmployeeList"; // Import your resource components
import Chart from "./Components/Chart";
// import { Route } from "react-router-dom";
import {AiOutlineLineChart} from "react-icons/ai"

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="Dashboard" list={Chart} icon={AiOutlineLineChart} />
    <Resource name="employees" list={EmployeeList} />
    <Resource name="LineCharts" list={Chart} icon={AiOutlineLineChart} />
  </Admin>
);
export default App;
