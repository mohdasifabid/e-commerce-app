"use client";
import { GrNext, GrPrevious } from "react-icons/gr";
import { PaginationPropsType } from "../lib/definitions";

export const Pagination = (props: PaginationPropsType) => {
  const { totalRecords, recordsPerPage, currentPage , totalPages} = props;
  const arr = Array.from(Array(totalPages));

  const btnsList = arr?.map((item, index) => {
    const btnName = index + 1;
    return (
      <button className="bg-gray-400 rounded-sm p-1 pl-2 pr-2" key={btnName}>
        {btnName}
      </button>
    );
  });

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
