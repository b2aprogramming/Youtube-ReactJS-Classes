import React from "react";
import { TableProps } from "./table.models";

function Table({columns, data}: TableProps) {
    return (
        <div>
            <table className="t-table">
                <thead>
                    <tr>
                        {columns.map((ele) => {
                            return (
                                <th>
                                    <span>{ele.headerName}</span>
                                </th>
                                
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => {
                        return (
                            <tr>
                                {columns.map((ele) => {
                                    return (
                                        <td>
                                            {!ele.column && <span>{row[ele.field]}</span>}
                                            {ele.column?.(row, ele.field)}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    );
}

export default Table;