export interface TableColumn {
    headerName: string;
    field: string;
    width?: string;
    className?: string;
    column?: (row: any, field?: string) => JSX.Element
}

export interface TableProps {
    columns: TableColumn[];
    data: any[];
    enablePagination?: boolean;
    enableSorting?: boolean;
}