import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage > 1;
  const isNextPageAvailable = totalItems - itemsPerPage * currentPage > 0;
  return (
    <div className="pagination">
      {isPrevPageAvailable ? (
        <button className="btn" onClick={goPrev}>
          ←
        </button>
      ) : (
        <button className="btn" onClick={goPrev} disabled></button>
      )}

      <span className="pagination__page">{currentPage}</span>
      {isNextPageAvailable ? (
        <button className="btn" onClick={goNext}>
          →
        </button>
      ) : (
        <button className="btn" onClick={goNext} disabled></button>
      )}
    </div>
  );
};

export default Pagination;
