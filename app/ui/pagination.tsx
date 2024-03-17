"use client"
import { GrNext, GrPrevious } from "react-icons/gr";
import { PaginationPropsType } from "../lib/definitions";
import { useState } from "react";

export const Pagination = (props: PaginationPropsType) => {
  const { totalRecords, recordsPerPage, currentPage, totalPages, setcurrentPage } = props;
  const [selectedPage, setSelectedPage] = useState(1)

  let startPage = Math.max(1, selectedPage - 3);
  let endPage = Math.min(totalPages, selectedPage + 3);

  if (selectedPage <= 3) {
    endPage = Math.min(7, totalPages);
  }
  const btnsList = [];

  for (let i = startPage; i <= endPage; i++) {
    btnsList.push(
      <button
        key={i}
        className={` ${i == currentPage ? `text-black` : `text-gray-400`}`}
        onClick={() => {
          setcurrentPage(i);
          setSelectedPage(i)
        }}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex gap-3 items-center">
      <button>
        <GrPrevious />
      </button>
      {btnsList}
      <button>
        <GrNext />
      </button>
    </div>
  );
};
