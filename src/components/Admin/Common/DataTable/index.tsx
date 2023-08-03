'use client';

import React, { useState } from 'react';
import Pagination from '../Pagination';
import PaginationCount from '../PaginationCount';
import { FaArrowDown, FaArrowUp, FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

interface ITableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  isActionButton?: boolean;
  actionButtonLabel?: string;
  actionButtons?: string[];
  renderActionButton?: (rowData: ITableRow) => React.ReactNode;
}

export interface ITableRow {
  [key: string]: string | number;
}

interface IMeta {
  current_page: number;
  total_pages: number;
  total_count: number;
  page_size: number;
}

export interface IApiResponse {
  meta: IMeta;
  data: ITableRow[];
}

interface IDataTableProps {
  columns: ITableColumn[];
  apiResponse: IApiResponse,
  onDelete: (rowData: ITableRow) => void;
  onUpdate?: (rowData: ITableRow) => void;
  onDetail: (rowData: ITableRow) => void;
}

function DataTable (props: IDataTableProps) {
  const { columns, apiResponse, onDelete, onUpdate, onDetail } = props;
  const { meta, data } = apiResponse;
  const { current_page: currentPage, total_pages: totalPages, total_count: totalCount } = meta;
  const itemsPerPage = meta.page_size;

  const [sortColumn, setSortColumn] = useState<ITableColumn | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const [currentPageData, setCurrentPageData] = useState<ITableRow[]>(data.slice(0, itemsPerPage));

  const sortedData = [...data].sort((a, b) => {
    if (sortColumn && sortDirection === 'asc') {
      return a[sortColumn.key] < b[sortColumn.key] ? -1 : 1;
    } else if (sortColumn && sortDirection === 'desc') {
      return a[sortColumn.key] > b[sortColumn.key] ? -1 : 1;
    } else {
      return 0;
    }
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = sortedData.slice(startIndex, endIndex);

  const handleSort = (column: ITableColumn) => {
    if (column.sortable) {
      if (sortColumn === column) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortColumn(column);
        setSortDirection('asc');
      }
    }
  };

  const onHandleUpdate = (rowData: ITableRow) => {
    if (onUpdate) {
      onUpdate(rowData)
    }
  };

  const handlePageChange = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newPageData = data.slice(startIndex, endIndex);
    setCurrentPageData(newPageData);
  };

  // Render the action button column content with custom functions
  const renderActionButton = (rowData: ITableRow, column: ITableColumn) => {
    const { actionButtons } = column;
    return (
      <>
        <div className="btn-group" role="group">
          {actionButtons?.includes('edit') && (
            <button
              onClick={() => onHandleUpdate(rowData)}
              className="btn btn-primary btn-sm mr-1"
            >
              <FaEdit />
              &nbsp;Edit
            </button>
          )}
          {actionButtons?.includes('detail') && (
            <button
              onClick={() => onDetail(rowData)}
              className="btn btn-secondary btn-sm"
            >
              <FaEye />
              &nbsp;Detail
            </button>
          )}
          {actionButtons?.includes('delete') && (
            <button
              onClick={() => onDelete(rowData)}
              className="btn btn-danger btn-sm mr-1"
            >
              <FaTrash />
              &nbsp;Delete
            </button>
          )}
        </div>
        {rowData.isExpanded && <div>{rowData.children}</div>}
      </>
    );
  };

  // Update the action button column with the custom rendering
  const updatedColumns = columns.map((column) => {
    if (column.isActionButton) {
      return {
        ...column,
        isActionButton: true
      };
    }
    return column;
  });

  return (
    <Card>
      <Card.Body>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-secondary">
              <tr>
                {updatedColumns.map((column) => (
                  <th key={column.key} onClick={() => handleSort(column)}>
                    {column.label}
                    {sortColumn === column && (
                      <span>{sortDirection === 'asc' ? <FaArrowUp /> : <FaArrowDown />}</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentPageItems.map((row, index) => (
                <tr key={index}>
                  {updatedColumns.map((column) => {
                    if (column.isActionButton) {
                      return (
                        <td key={column.key}>
                          {renderActionButton(row, column)}
                        </td>
                      );
                    } else {
                      return (
                        <td key={column.key}>
                          {row[column.key]}
                        </td>
                      )
                    }
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex">
          <PaginationCount
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalCount}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default DataTable;
