import React from "react";
import { usePagination } from "../../hooks/usePagination";

import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
const PaginationComp = (props) => {
  const { onPageChange, totalCount, currentPage, pageSize } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  let lastPage = paginationRange.totalPageCount;
  let pageText = `${paginationRange.startInd} - ${paginationRange.endInd} of ${totalCount}`;

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  //   const onFirstPage = () => {
  //     onPageChange(1);
  //   };

  //   const onLastPage = () => {
  //     onPageChange(lastPage);
  //   };

  return (
    <div className="pagintion-bar">
      <span>{pageText}</span>
      {/* <SkipStartFill
                onClick={onFirstPage}
                className={currentPage === 1 ? "disabled" : ""}
            /> */}
      <ChevronLeft
        size={20}
        onClick={onPrevious}
        className={currentPage === 1 ? "disabled" : ""}
      />
      <ChevronRight
        size={20}
        onClick={onNext}
        className={currentPage === lastPage ? "disabled" : ""}
      />
      {/* <SkipEndFill
                onClick={onLastPage}
                className={currentPage === lastPage ? "disabled" : ""}
            /> */}
    </div>
  );
};

export default PaginationComp;
