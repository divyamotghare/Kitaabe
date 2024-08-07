import React, { useCallback, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import { useSearchParams } from "react-router-dom";
import useFetchBooks from "../Hooks/useFetchBook";
import { debounce } from "../utils/debounce";

function Search({ className }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("title") || "";

  const { refetch } = useFetchBooks(searchParams, false);

  const debouncedFetch = useCallback(debounce(refetch, 500), []);

  const handleChange = (e) => {
    const value = e.target.value;
    searchParams.set("title", value);
    setSearchParams(searchParams);
    debouncedFetch();
  };

  useEffect(() => {
    setSearchParams(searchTerm ? { title: searchTerm } : {});
  }, []);

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center border-2 border-secondary text-secondary rounded-md overflow-hidden">
        <input
          type="search"
          name="search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          className="tracking-wider w-full placeholder-secondary font-semibold border-none bg-primary h-10 px-5 pr-10 focus:outline-none"
        />
        <FaSearch className="w-8 h-4.5 mr-2" />
      </div>
    </div>
  );
}

export default Search;
