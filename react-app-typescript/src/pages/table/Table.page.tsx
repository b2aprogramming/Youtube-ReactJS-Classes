import { useMemo } from "react";
import Table from "../../shared/components/table/Table";
import { TableColumn } from "../../shared/components/table/table.models";

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
function TablePage() {
    const columns = useMemo<TableColumn[]>(() => {
        return [
            {field: 'position', headerName: 'No', column: (row) => {
                return (
                    <strong>{row.position}</strong>
                )
            }},
            {field: 'name', headerName: 'Name'},
            {field: 'weight', headerName: 'Weight', column: (row) => {
                return (
                    <strong>{row.weight}</strong>
                )
            }},
            {field: 'symbol', headerName: 'Symbol'},
        ]
    }, [])
    return (
        <div>
            <Table
            columns={columns}
            data={ELEMENT_DATA}
            ></Table>
        </div>
    );
}

export default TablePage;