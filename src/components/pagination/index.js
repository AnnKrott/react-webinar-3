import React from "react";
import { usePagination } from "../../store/use-pagination";
import './style.css'

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = usePagination(totalPages);

  const res = pagesArray.filter(p => 
    p === 1 || p === page || p === page + 1 || p === page - 1 || p === totalPages
  )
  
  return (
    <div className='Page-wrapper'>
      {res.map(p =>
        <span
          key={p}
          className={p === page ? 'Page Page-current' : 'Page'}
          onClick={() => changePage(p)}
        >
          {p}
        </span>
      )}

    </div>
  )
};

export default Pagination;