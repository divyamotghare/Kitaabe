import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateBook = async (updatedBook) => {
  const response = await fetch(
    `http://64.227.142.191:8080/application-test-v1.1/books/${updatedBook.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
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

 function useEditBook() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (updatedBook) => updateBook(updatedBook),
    onSuccess: () => queryClient.invalidateQueries(["books"]),
  });
  return mutation;
}
export default useEditBook;