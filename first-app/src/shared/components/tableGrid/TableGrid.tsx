import { TableGridProps } from "./tableGrid.models";

function TableGrid({columns, data}: TableGridProps) {
    return (
        <div className="table-grid-container">
            <table className="table-grid">
                <thead>
                    <tr>
                        {columns.map((ele, ind) => {
                            return (
                                <th key={ind}>
                                    {!ele.header && <span>{ele.headerName}</span>}
                                    {ele.header?.(ele)}
                                </th>
                            )
                        })}
                        
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => {
                        return (
                            <tr key={row.id}>
                                 {columns.map((ele) => {
                                    return (
                                        <td key={ele.field}>
                                            {!ele.column && (
                                                <span>{row[ele.field]}</span>
                                            )}
                                            {ele.column?.(row)}
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

export default TableGrid;