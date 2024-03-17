import { GrNext, GrPrevious } from "react-icons/gr";
import { PaginationPropsType } from "../lib/definitions";

export const Pagination = (props: PaginationPropsType) => {
  const { totalRecords, recordsPerPage, currentPage, totalPages } = props;

  let startPage = Math.max(1, currentPage - 3);
  let endPage = Math.min(totalPages, currentPage + 3);

  if (currentPage <= 3) {
    endPage = Math.min(7, totalPages);
  }
  const btnsList = [];
  
  for (let i = startPage; i <= endPage; i++) {
    btnsList.push(
      <button
        key={i}
        className={` ${i == currentPage ? `text-black` : `text-gray-400`}`}
        onClick={() => console.log("Clicked page", i)}
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
