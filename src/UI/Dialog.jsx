import React, { useRef, useEffect, useState } from "react";
import { HiXMark } from "react-icons/hi2";

const Dialog = ({ isOpen, onClose, children }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    onClose();

    setModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className="modal">
      <button
        onClick={handleCloseModal}
        className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600"
      >
        <HiXMark className="w-6 h-6" />
      </button>
      {children}
    </dialog>
  );
};

export default Dialog;
