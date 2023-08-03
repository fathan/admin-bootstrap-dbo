import React from 'react';

interface IPaginationCountProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

function PaginationCount (props: IPaginationCountProps) {
  const { currentPage, totalPages, totalItems } = props;

  return (
    <div className="flex-grow-1 mt-2">
      <p className="text-secondary">
        Page {currentPage} of {totalPages} ({totalItems} items)
      </p>
    </div>
  );
};

export default PaginationCount;
