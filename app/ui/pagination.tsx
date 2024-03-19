"use client";

import { useState } from "react";
import { FcPrevious , FcNext} from "react-icons/fc";
import { PaginationPropsType } from "../lib/definitions";

export const Pagination = (props: PaginationPropsType) => {
  const { currentPage, totalPages, setcurrentPage } = props;
  const [selectedPage, setSelectedPage] = useState(1);

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
          setSelectedPage(i);
        }}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex gap-3 items-center">
      <button>
        <FcPrevious />
      </button>
      {btnsList}
      <button>
        <FcNext />
      </button>
    </div>
  );
};
