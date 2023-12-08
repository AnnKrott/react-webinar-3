import React, { memo } from "react";
import { countPages, getPages } from "../../store/use-pagination";
import PropTypes from "prop-types";
import './style.css'

const Pagination = ({ totalPages, page, loadPages }) => {

  let pagesArray = countPages(totalPages);
  let res = getPages(page, totalPages, pagesArray)
   
  return (
    <div className='Page-wrapper'>
      {res.map((p, i) =>
        <div key={i} className={(typeof p === 'string') ? 'Page-disabled' : ''}>
          <span
            className={p === page ? 'Page Page-current' : 'Page'}
            onClick={() => loadPages(p)}
          >
            {p}
          </span>
        </div>
      )}
    </div>
  )
};

Pagination.propTypes = {
  totalPages: PropTypes.number,
  page: PropTypes.number,
  loadPages: PropTypes.func
};

Pagination.defaultProps = {
  loadPages: () => {},
  totalPages: 1,
  page: 1
}

export default memo(Pagination);