import { useQuery } from "@tanstack/react-query";

const fetchBooks = async (searchParams, currentPage = 1) => {
  const searchTerm = searchParams.get("title") || "";
  const sortValue = searchParams.get("DIR") || "";

  const queryString = `?title=${searchTerm}&DIR=${sortValue}&page=${currentPage}`;


  const response = await fetch(
    `http://64.227.142.191:8080/application-test-v1.1/books${queryString}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  

  return data;
};

function useFetchBooks(searchParam, currentPage = 1) {
  const response = useQuery({
    queryKey: ["books", searchParam, currentPage],
    queryFn: () => fetchBooks(searchParam, currentPage),
    // enabled: isQueryActive,
  });
  return response;
}
export default useFetchBooks;
