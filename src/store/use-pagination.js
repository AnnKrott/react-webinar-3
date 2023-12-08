import { useMemo } from "react";

export const countPages = (totalCountPages) => {
  
  const pagesArray = useMemo(() => {
    let resultArray = [];
    for (let i = 0; i < totalCountPages; i++) {
      resultArray.push(i + 1)
    }
    return resultArray;
  }, [totalCountPages])

  return pagesArray;
}


export const getPages = (page, totalPages, pagesArray) => {

  const res = useMemo(() => {
    // res - array of pageNumbers, which should be seen on a page
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
  return res
}