"use client"
import axios from "axios";
import { useEffect, useState } from "react";

import { Layout } from "../ui/layout";
import { Interest } from "../ui/interest";
import { Pagination } from "../ui/pagination";
import { interestList } from "../lib/placeholder-data";


const InterestPage = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [recordsPerPage, setRecordsPerPage] = useState(6) 
  const endPoint = `/api/get-categories?pageNumber=${pageNumber}&recordsPerPage=${recordsPerPage}`
  const getCategories = async () => {
    const res = await axios.get(endPoint);
  };
  useEffect(() => {
    getCategories();
  }, [pageNumber, recordsPerPage]);
  return (
    <Layout>
      <div className="flex flex-col  border-2 border-gray-400 rounded-xl pl-12 pr-12 pb-4 w-576">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold mb-4 pt-4">
            Please mark your interests!
          </p>
          <p className="mb-4"> We will keep you notfied.</p>
        </div>
        <p className="mb-4 font-bold"> My saved interests!</p>

        <div className="flex flex-col gap-8 ">
          {interestList?.map(({ name, id, checked }) => {
            return (
              <Interest interest={name} value={id} checked={checked} key={id} />
            );
          })}
          <div className="flex items-center flex-col">
            <Pagination
              totalPages={3}
              recordsPerPage={10}
              currentPage={1}
              totalRecords={20}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InterestPage;
