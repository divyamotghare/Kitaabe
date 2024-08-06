import { useMutation, useQueryClient } from "@tanstack/react-query";

const addBook = async (newBook) => {
 
  const response = await fetch(
    "http://64.227.142.191:8080/application-test-v1.1/books",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    }
  );
  if (!response.ok) {
    const errorData = await response.text();
    console.error("Response error:", errorData);
    throw new Error(
      `Network response was not ok: ${response.status} ${response.statusText}`
    );
  }
  return response.json();
};

function useAddBook() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newBook) => addBook(newBook),
    onSuccess: () => {
    

      return queryClient.invalidateQueries(["books"]);
    },
 
  });
  return mutation;
}
export default useAddBook;
