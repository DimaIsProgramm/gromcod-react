import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const totalStr = Math.ceil(totalItems / itemsPerPage);
  const isPrevPageAvailable = currentPage === 1;
  const isNextPageAvailable = currentPage === totalStr;
  return (
    <div className="pagination">
      {isPrevPageAvailable ? (
        <button className="btn" onClick={goPrev} disabled></button>
      ) : (
        <button className="btn" onClick={goPrev}>
          ←
        </button>
      )}

      <span className="pagination__page">{currentPage}</span>
      {isNextPageAvailable ? (
        <button className="btn" onClick={goNext} disabled></button>
      ) : (
        <button className="btn" onClick={goNext}>
          →
        </button>
      )}
    </div>
  );
};

export default Pagination;
