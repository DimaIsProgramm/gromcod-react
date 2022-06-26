import React from 'react';

const Pagination = ({ goPrev, goNext, curPage, totalItems, itemPerPage }) => {
  const totalStr = Math.ceil(totalItems / itemPerPage);
  const isPrevPageAvailable = curPage === 1;
  const isNextPageAvailable = curPage === totalStr;
  return (
    <div className="pagination">
      {isPrevPageAvailable ? (
        <button className="btn" onClick={goPrev} disabled></button>
      ) : (
        <button className="btn" onClick={goPrev}>
          ←
        </button>
      )}

      <span className="pagination__page">{curPage}</span>
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
