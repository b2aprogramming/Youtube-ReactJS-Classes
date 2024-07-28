import React, { useEffect, useMemo } from "react";
import TableGrid from "../../shared/components/tableGrid/TableGrid";
import { TableGridColumn } from "../../shared/components/tableGrid/tableGrid.models";
import useApi from "../../shared/learning/hooks/useApi";
import Icon from "../../shared/components/icon/Icon";
import Chip from '@mui/material/Chip';

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

// "id": "1d1d",
//       "name": "Bhavani",
//       "className": "VIII",
//       "avatar": "",
//       "email": "bhavani@gmial.com",
//       "classSection": "A",
//       "joiningDate": "06/07/2024",
//       "parentName": "Prasad",
//       "phone": "1748523698",
//       "city": "Hyderabad"


function StudentsPage(){
    const [getAllStudetns, {data, isLoading}] = useApi({url: '/students'});
    // const columns = useMemo<TableGridColumn[]>(() => {
    //     return [
    //         {field: 'position', headerName: 'No'},
    //         {field: 'name', headerName: 'Name'},
    //         {field: 'weight', headerName: 'Weight', column: (row) => {
    //             return (
    //                 <div>
    //                     <strong>{row.weight}</strong>
    //                     <strong> this is wieght</strong>
    //                 </div>
    //             )
    //         }},
    //         {field: 'symbol', headerName: 'Symbol'},
    //     ]
    // }, []);

    const columns = useMemo<TableGridColumn[]>(() => {
        return [
            {field: 'checkbox', headerName: 'Checkbox', header:() => {
                return (
                    <div>ccc</div>
                )
            },
            column: (row) => {
                return (
                    <div>
                        ccc
                    </div>
                )
            }
            },
            {field: 'name', headerName: 'Name'},
            {field: 'id', headerName: 'ID'},
            {field: 'joiningDate', headerName: 'Date'},
            {field: 'parentName', headerName: 'Parent Name'},
            {field: 'city', headerName: 'City'},
            {field: 'phone', headerName: 'Contact', column: () => {
                return (
                    <div className="contact-icons">
                        <span>
                            <Icon name="call"/>
                        </span>
                        <span>
                            <Icon name="email"/>
                        </span>
                        
                    </div>
                )
            }},
             {field: 'className', headerName: 'Grade', column: (row) => {
                return(
                    <div className="">
                         <Chip color="primary" label={row.className} style={{width: '80px'}}></Chip>
                    </div>
                )
             }},
        ]
    }, []);

    useEffect(() => {
        getAllStudetns();
    }, []);

    return (
        <div className="content">
            <h1>StudentsPage</h1>
            <div>
                <TableGrid
                    columns={columns}
                    data={data || []}
                />
            </div>
        </div>
    )
}

export default StudentsPage;