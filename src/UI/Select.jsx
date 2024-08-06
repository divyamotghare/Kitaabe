import React, { useEffect } from "react";
import useFetchBooks from "../Hooks/useFetchBook";
import { useSearchParams } from "react-router-dom";

function Select() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortValue = searchParams.get("DIR");

  const { refetch } = useFetchBooks(searchParams);

  useEffect(() => {
    refetch();
  }, [searchParams]);

  const handleSortChange = (event) => {
    const value = event.target.value;
    searchParams.set("DIR", value);
    setSearchParams(searchParams);
  };

  return (
    <div className="w-60">
      <select
        value={sortValue}
        onChange={handleSortChange}
        className="cursor-pointer appearance-none bg-primary text-center text-secondary font-medium text-xl w-full outline-none"
      >
        <option selected>Sort</option>
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>

      {/* <div className="mt-4">
        {Array.isArray(data) ? (
          data.map((book) => (
            <div key={book.id} className="p-2 border-b">
              {book.title}
            </div>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div> */}
    </div>
  );
}

export default Select;
