import React from 'react';

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

function Pagination (props: IPaginationProps) {
  const { currentPage, totalPages, onPageChange } = props;

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav>
      <ul className="pagination pagination-sm justify-content-end">
        <li className="page-item">
          <button
            className="page-link"
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
          >
            Previous
          </button>
        </li>

        {Array.from({ length: totalPages }).map((_, index) => (
          <li
            key={index}
            className="page-item"
          >
            <button
              key={index}
              onClick={() => onPageChange(index + 1)}
              className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          </li>
        ))}

        <li className="page-item">
          <button
            className="page-link"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
