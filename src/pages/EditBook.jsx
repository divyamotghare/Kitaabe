import { GrEdit } from "react-icons/gr";

import BookForm from "../UI/BookForm";
import useEditBook from "../Hooks/useEditBook";
import { useState } from "react";
import Dialog from "../UI/Dialog";

function EditBook({ book }) {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate, isSuccess, isLoading } = useEditBook();

  function handleEditBook(updatedBook) {
    mutate(updatedBook, { onSuccess: () => setIsOpen(false) });
  }

  return (
    <>
      <div onClick={() => setIsOpen(true)}>
        <GrEdit className="absolute top-2 right-2 w-6 h-4 text-secondary-light hover:text-secondary cursor-pointer" />
      </div>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <BookForm
          title={`Update ${book.title}`}
          onSubmit={handleEditBook}
          isSuccess={isSuccess}
          initialData={book}
          isLoading={isLoading}
        />
      </Dialog>
    </>
  );
}

export default EditBook;
