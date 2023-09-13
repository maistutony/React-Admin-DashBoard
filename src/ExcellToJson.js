import React,{useEffect,useState}from 'react'
import * as XLSX from 'xlsx/xlsx.mjs';

function ExcellToJson() {
     const [excelData, setExcelData] = useState([]);

     useEffect(() => {
       fetch(process.env.PUBLIC_URL + "/Absenteeism_at_work_Project.xls")
         .then((response) => response.arrayBuffer())
         .then((data) => {
           const workbook = XLSX.read(data, { type: "array" });
           const firstSheetName = workbook.SheetNames[0];
           const worksheet = workbook.Sheets[firstSheetName];
           const jsonData = XLSX.utils.sheet_to_json(worksheet);
           setExcelData(jsonData);
         });
     }, []);
    console.log(excelData)

  return (
    <div>ExcellToJson</div>
  )
}

export default ExcellToJson
