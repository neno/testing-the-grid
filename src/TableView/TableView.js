import React from 'react';
import { AgGridReact } from 'ag-grid-react';

const columnDefs = [
  { headerName: 'ID', field: 'id' },
  { headerName: 'User Id', field: 'userId' },
  { headerName: 'Title', field: 'title' },
  { headerName: 'Body', field: 'body' },
];

export const TableView = ({ rowData, setPage, handleBodyScrollEnd }) => {
  // const handleBodyScrollEnd = (event) => {
  //   const { api } = event;
  //   const rowsCount = api.getDisplayedRowCount();
  //   const row = api.getDisplayedRowAtIndex(rowsCount - 1);

  //   if (row?.alreadyRendered) {
  //     setPage((prev) => prev + 1);
  //   }
  // };

  return (
    <AgGridReact
      columnDefs={columnDefs}
      rowData={rowData}
      onGridReady={handleBodyScrollEnd}
      suppressScrollOnNewData={true}
    />
  );
};
