export interface TableGridColumn {
    headerName: string;
    field: string;
    width?: string;
    className?: string;
    column?: (row: any) => JSX.Element;
    header?: (row: any) => JSX.Element;
}
export interface TableGridProps {
    columns: TableGridColumn[];
    data: any[];
}