import React, { useEffect, useRef, useState } from 'react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { TableView } from './TableView/TableView';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (page = 1, size = 20) => {
  const response = await fetch(`${baseUrl}/posts?_page=${page}&_limit=${size}`);
  return await response.json();
};

const pageSize = 20;

export const MyGrid = () => {
  const [page, setPage] = useState(1);
  const [rowData, setRowData] = useState([]);

  const gridRef = useRef(null);

  useEffect(() => {
    if (page) {
      const loadNewPosts = async () => {
        const newPosts = await fetchPosts(page, pageSize);

        if (newPosts.length > 0) {
          setRowData((prev) => [...prev, ...newPosts]);
        }
      };
      loadNewPosts();
    }
  }, [page]);

  return (
    <div style={{ height: 400, width: 800, backgroundColor: 'orange' }}>
      <TableView rowData={rowData} setPage={setPage} />
    </div>
  );
};
