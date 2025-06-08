import React from 'react'
import classes from '../styles/Pagination.module.css'
function Pagination({ currentPage, numberOfPages, handlePreviousPage, handleNextPage }) {
  return (
    <div className={classes.ctn}>
      <button type='button' disabled={currentPage <= 1} onClick={handlePreviousPage}>
        Previous
      </button>
      <p>{currentPage}</p>
      <button type='button' disabled={currentPage === numberOfPages} onClick={handleNextPage}>
        Next
      </button>
    </div>
  );
}


export default Pagination
