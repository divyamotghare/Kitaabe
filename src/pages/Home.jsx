import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { FilterDrawer } from "../UI/FilterDrawer";
import Select from "../UI/Select";
import EditBook from "./EditBook";
import useFetchBooks from "../Hooks/useFetchBook";
import Pagination from "../UI/Pagination";
import Spinner from "../UI/Spinner";

function Home() {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useFetchBooks(searchParams, currentPage);

  const books = data?.data;
  const pagination = data?.pagination;

  //
  return (
    <div className="pt-10">
      <div className="flex justify-between items-center mb-3">
        <FilterDrawer />
        <Select />
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {books?.map((book) => (
              <div
                key={book.id}
                className="p-4 border-2 border-secondary rounded bg-booksbg"
              >
                <div className="relative p-4 rounded-lg shadow-md">
                  <h2 className="text-xl text-secondary font-bold">
                    {book.title}
                  </h2>
                  <p className="text-primary-dark">by {book.author}</p>
                  <EditBook book={book} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex  justify-center mt-2">
            <Pagination
              pagination={pagination}
              page={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
