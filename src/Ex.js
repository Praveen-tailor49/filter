import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Ex = ({value}) => {
        return (
        
            <ExcelFile>
                <ExcelSheet data={value} name="Employees">
                    <ExcelColumn label="First" value="first"/>
                    <ExcelColumn label="Last" value="last"/>
                    <ExcelColumn label="Year" value="year"/>
                    <ExcelColumn label="Month" value='month'/>
                </ExcelSheet>
            </ExcelFile>
        );

}

export default Ex