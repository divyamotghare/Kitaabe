import { useContext, useState } from "react";
import useAddBook from "../Hooks/useAddBook";
import BookForm from "../UI/BookForm";
import Dialog from "../UI/Dialog";

function AddBooks() {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate: addNewBook, isPending, isSuccess } = useAddBook();

  function handleAddNewBook(book) {
    addNewBook(book, { onSuccess: () => setIsOpen(false) });
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="text-secondary bg-primary border-2 border-secondary focus:outline-none hover:text-secondary hover:border-secondary hover:bg-primary focus:ring-4 focus:ring-primary font-medium rounded-lg text-base sm:text-l md:text-l lg:text-xl  lg:px-1 lg:py-1 "
      >
        Add new book
      </button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <BookForm
          title="Add new book"
          isSuccess={isSuccess}
          onSubmit={handleAddNewBook}
          isLoading={isPending}
        />
      </Dialog>
    </>
  );
}

export default AddBooks;
