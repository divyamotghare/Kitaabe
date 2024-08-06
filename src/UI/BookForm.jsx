import React, { useState, useEffect } from "react";

const initialFormData = {
  author: "",
  country: "",
  language: "",
  link: "",
  year: "",
  pages: "",
  title: "",
};

const BookForm = ({
  initialData,
  isSuccess,
  onSubmit,

  title,
  isLoading,
}) => {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  useEffect(() => {
    if (isSuccess) {
      setFormData(initialFormData);
    }
  }, [isSuccess]);

  console.log("loading:", isLoading);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-booksbg rounded-lg shadow-xl">
      <h2 className="text-2xl text-secondary font-bold mb-6 text-center">
        {title}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(formData).map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-secondary-light mb-1 capitalize"
              >
                {field}
              </label>
              <input
                type={field === "pages" || field === "year" ? "number" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-3 py-2 border-2 border-secondary-light rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"
                required
              />
            </div>
          ))}
        </div>

        <div className="pt-4">
          <button
            disabled={isLoading}
            type="submit"
            className="w-full font-bold  bg-primary text-secondary py-2 px-4 rounded-md hover:border-2 hover:border-secondary focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
          >
            {`${isLoading ? "Submitting..." : "Submit"}  `}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
