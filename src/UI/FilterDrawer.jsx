import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { useSearchParams } from "react-router-dom";

const languages = [
  "Marathi",
  "Hindi",
  "English",
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Japanese",
  "Korean",
  "Russian",
  "Arabic",
  "Portuguese",
  "Italian",
  "Dutch",
  "Swedish",
  "Danish",
  "Norwegian",
  "Finnish",
  "Turkish",
  "Polish",
  "Czech",
  "Hungarian",
  "Greek",
];

const countries = [
  "India",
  "United States",
  "Canada",
  "Mexico",
  "Brazil",
  "Argentina",
  "United Kingdom",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "China",
  "Japan",
  "South Korea",
  "Australia",
  "New Zealand",
  "South Africa",
  "Egypt",
  "Russia",
  "Saudi Arabia",
  "Turkey",
];

export function FilterDrawer() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  function handleCountrySort(e) {
    const checked = e.target.checked;
    const value = e.target.value;

 
  }

  return (
    <React.Fragment>
      <button onClick={openDrawer} className="text-xl flex items-center">
        <FiFilter className="text-secondary" />
        <span className="-mt-[2px] text-secondary font-medium">FILTER</span>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 h-full w-80 bg-booksbg shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="mb-5 p-2.5 border-b border-secondary flex items-center justify-between">
            <h5 className="text-xl font-medium text-secondary">Filter</h5>
            <button
              onClick={closeDrawer}
              className="text-secondary-light hover:text-secondary"
            >
              <RxCross1 />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto">
            <div className="border-b mb-5 p-2.5 border-secondary">
              <h1 className="text-secondary font-bold mb-2">Countries</h1>
              <div className="grid grid-cols-2 gap-2">
                {countries.map((country) => (
                  <div key={country} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`country-${country}`}
                      value={country}
                      className="mr-2"
                      onChange={handleCountrySort}
                    />
                    <label htmlFor={`country-${country}`} className="text-sm">
                      {country}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-b mb-5 p-2.5 border-secondary">
              <h1 className="text-secondary font-bold mb-2">Languages</h1>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((language) => (
                  <div key={language} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`language-${language}`}
                      value={language}
                      className="mr-2"
                    />
                    <label htmlFor={`language-${language}`} className="text-sm">
                      {language}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
