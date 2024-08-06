import { useEffect } from "react";

function Pagination({ pagination, page, setCurrentPage }) {
  const { totalPages } = pagination;

  // useEffect(() => {
  //   setCurrentPage(currentPage);
  // }, [currentPage]);

  const pageArr = new Array(totalPages).fill(1);


  return (
    <div class="flex items-center gap-4">
      <button
        disabled={page === 1}
        class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={() => setCurrentPage(page - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          ></path>
        </svg>
        Previous
      </button>
      <div class="flex items-center gap-2">
        {pageArr.map((_, index) => (
          <button
            className={` relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg  border-2 border-secondary text-center align-middle font-sans text-xs font-bold uppercase text-secondary transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${
              page === index + 1 ? " bg-secondary-light text-white" : ""
            }`}
            type="button"
            onClick={() => setCurrentPage(index + 1)}
          >
            <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {index + 1}
            </span>
          </button>
        ))}
      </div>
      <button
        disabled={page === totalPages}
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
        type="button"
        onClick={() => setCurrentPage(page + 1)}
      >
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
