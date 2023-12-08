import React, { useCallback, useEffect, useMemo } from "react";
import { usePagination } from "../../store/use-pagination";
import './style.css'

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = usePagination(totalPages);

  const res = useMemo(() => {
    let res = []
    console.log('render of paagination');

    if (page === 1) {
      res = [1, 2, 3, totalPages]
    } else if (page === totalPages) {
      res = [1, totalPages - 2, totalPages - 1, totalPages]
    } else {
      res = pagesArray.filter(p =>
        p === 1 || p === page || p === page + 1 || p === page - 1 || p === totalPages
      )
    }

    res.forEach((number, i, arr) => {
      if (arr[i + 1] - number >= 2) {
        arr.splice(i + 1, 0, '...')
      }
    })

    return res
  }, [page, totalPages])
   
  return (
    <div className='Page-wrapper'>
      {res.map((p, i) =>
        <div className={(typeof p === 'string') ? 'Page-disabled' : ''}>
          <span
            key={i}
            className={p === page ? 'Page Page-current' : 'Page'}
            onClick={() => changePage(p)}
          >
            {p}
          </span>
        </div>
      )}
    </div>
  )
};

export default Pagination;