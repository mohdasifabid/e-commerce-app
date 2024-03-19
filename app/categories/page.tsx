"use client";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Layout } from "../ui/layout";
import { Interest } from "../ui/interest";
import { Pagination } from "../ui/pagination";
import Loader from "../loader";

const InterestPage = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const endPoint = `/api/get-categories?pageNumber=${currentPage}&recordsPerPage=${6}`;

  const getCategories = async () => {
    const res = await axios.get(endPoint);
    return res.data;
  };

  const { isLoading, data } = useQuery({
    queryKey: ["categories", currentPage],
    queryFn: () => getCategories(),
  });

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

        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex flex-col gap-8 ">
            {data?.categories?.map(({ categoryName, id, interested }: any) => {
              return (
                <Interest
                  interest={categoryName}
                  value={id}
                  checked={interested}
                  key={id}
                />
              );
            })}
            <div className="flex items-center flex-col">
              <Pagination
                totalPages={data?.totalPages}
                recordsPerPage={data?.recordsPerPage}
                currentPage={data?.pageNumber}
                totalRecords={data?.totalPages}
                setcurrentPage={setcurrentPage}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default InterestPage;
