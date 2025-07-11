'use client'
import { useState } from "react";

export const Modal1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
        <div className="modal-title mb-6">
          <h1 className="text-3xl text-gray-800 font-bold">Modal v1</h1>
        </div>

        {/* Open Button */}
        <div className="modal-open-btn">
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            Open Modal
          </button>
        </div>

      </div>

      {/* Modal + Overlay: Only rendered if open */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="modal-content-wrapper fixed z-50 top-1/2 left-1/2 w-full max-w-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out scale-100 opacity-100 bg-white p-6 rounded-xl shadow-xl">
            <div className="modal-header mb-3">
              <h2 className="text-2xl text-gray-800 font-semibold">This is modal content</h2>
            </div>
            <div className="modal-content space-y-3">
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non alias mollitia pariatur amet.
              </p>
              <p className="text-sm text-gray-500">
                Obcaecati, tempore ut voluptate consequatur quas ipsa maiores hic veritatis harum.
              </p>
              <p className="text-sm text-gray-500">
                Obcaecati, tempore ut voluptate consequatur quas ipsa maiores hic veritatis harum.
              </p>

              {/* Close Button */}
            </div>
            <div className="modal-close-button">
              <button className="p-1 absolute top-2.5 right-2.5 text-lg font-bold text-gray-400 hover:text-black hover:bg-gray-200 rounded transition cursor-pointer" onClick={() => setIsOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="22px"
                  viewBox="0 -960 960 960"
                  width="22px"
                  fill="CurrentColor"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}


export const Modal2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
        <div className="modal-title mb-6">
          <h1 className="text-3xl text-gray-800 font-bold">Modal v2</h1>
        </div>

        {/* Open Button */}
        <div className="modal-open-btn">
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            Open Modal
          </button>
        </div>

      </div>

      {/* Modalwrapper */}
      <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 z-40 ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Modal Content */}
        <div className={`modal-content-wrapper relative z-50 bg-white w-full max-w-lg p-6 rounded-xl shadow-xl transition-all duration-300 transform ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95"}`}>
          <div className="modal-header mb-3">
            <h2 className="text-2xl text-gray-800 font-semibold">This is modal content</h2>
          </div>
          <div className="modal-content space-y-3">
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non alias mollitia pariatur amet.
            </p>
            <p className="text-sm text-gray-500">
              Obcaecati, tempore ut voluptate consequatur quas ipsa maiores hic veritatis harum.
            </p>
            <p className="text-sm text-gray-500">
              Obcaecati, tempore ut voluptate consequatur quas ipsa maiores hic veritatis harum.
            </p>

            {/* Close Button */}
          </div>
          <div className="modal-close-button">
            <button className="p-1 absolute top-2.5 right-2.5 text-lg font-bold text-gray-400 hover:text-black hover:bg-gray-200 rounded transition cursor-pointer" onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="22px"
                viewBox="0 -960 960 960"
                width="22px"
                fill="CurrentColor"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>

  );
}

export const Modal3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Page Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
        <h1 className="text-3xl text-gray-800 font-bold mb-6">Modal v3</h1>
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>
      </div>

      {/* Wrapper always mounted */}
      <div className="modal-content-wrapper fixed inset-0 z-40 flex items-start justify-center pointer-events-none">
        {/* Backdrop */}
        <div className={`absolute inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"}`}
        />

        {/* Modal Content - Slides from top */}
        <div className={`modal-content sm:w-full relative z-50 bg-white max-w-lg rounded-xl shadow-xl transition-all duration-300 transform
            ${isOpen ? "translate-y-10 opacity-100 scale-100 pointer-events-auto" : "-translate-y-10 opacity-0 scale-95"}`}
        >
          {/* Header */}
          <div className="modal-header border-b border-gray-300 p-4">
            <h2 className="text-2xl font-semibold text-gray-800">Modal heading</h2>
          </div>

          {/* Body */}
          <div className="modal-body p-4 border-b border-gray-300">
            <p className="text-gray-500">Are you sure you want to save changes?</p>
          </div>

          {/* Footer */}
          <div className="modal-footer flex items-center justify-end gap-2.5 p-4">
            <button className="bg-gray-500 text-white text-sm px-3 py-2 rounded-md hover:bg-gray-700 transition cursor-pointer" onClick={() => setIsOpen(false)}>
              Close
            </button>
            <button className="bg-blue-600 text-white text-sm px-3 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
              Save Changes
            </button>
          </div>

          {/* Close Icon */}
          <div className="modal-close-btn">
            <button className="p-1 absolute top-2.5 right-2.5 text-lg font-bold text-gray-400 hover:text-black hover:bg-gray-200 rounded transition cursor-pointer" onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="22px"
                viewBox="0 -960 960 960"
                width="22px"
                fill="CurrentColor"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const Modal4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Page Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
        <h1 className="text-3xl text-gray-800 font-bold mb-6">Modal v4</h1>
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>
      </div>

      {/* Wrapper always mounted */}
      <div className="fixed inset-0 z-40 flex items-start justify-center pointer-events-none">
        {/* Backdrop */}
        <div className={`absolute inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"}`}
        />

        {/* Modal Content - Slides from top */}
        <div className={`sm:w-full relative z-50 bg-white max-w-lg rounded-xl shadow-xl transition-all duration-300 transform
            ${isOpen ? "translate-y-10 opacity-100 scale-100 pointer-events-auto" : "-translate-y-10 opacity-0 scale-95"}`}
        >
          {/* Header */}
          <div className="border-b border-gray-300 p-4">
            <h2 className="text-2xl font-semibold text-gray-800">Are you sure?</h2>
          </div>

          {/* Body */}
          <div className="p-4 border-b border-gray-300">
            <p className="text-gray-500">You are about to delete the following 3 products, this cannot be undone:</p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-2.5 p-4">
            <button className="bg-gray-500 text-white text-sm px-3 py-2 rounded-md hover:bg-gray-700 transition cursor-pointer" onClick={() => setIsOpen(false)}>
              No, cancel
            </button>
            <button className="flex gap-1.5 items-center bg-red-600 text-white text-sm px-3 py-2 rounded-md hover:bg-red-700 transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff"><path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" /></svg>
              Yes, delete
            </button>
          </div>

          {/* Close Icon */}
          <button className="p-1 absolute top-2.5 right-2.5 text-lg font-bold text-gray-400 hover:text-black hover:bg-gray-200 rounded transition cursor-pointer" onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="22px"
              viewBox="0 -960 960 960"
              width="22px"
              fill="CurrentColor"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export const Modal5 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Page Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
        <h1 className="text-3xl text-gray-800 font-bold mb-6">Modal v5</h1>
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>
      </div>

      {/* Wrapper always mounted */}
      <div className="fixed inset-0 z-40 flex items-start justify-center pointer-events-none">

        {/* Modal Content - Slides from top */}
        <div className={`sm:w-full z-50 bg-white w-screen h-screen shadow-xl transition-all duration-300 transform
            ${isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-5 opacity-0"}`}
        >
          {/* Header */}
          <div className="border-b border-gray-300 p-4 relative">
            <h2 className="text-2xl font-semibold text-gray-800">Modal heading</h2>
          </div>

          {/* modal body */}
          <div className="modal-body p-4">
            <p>Modal Content Here...</p>
          </div>

          {/* Close Icon */}
          <div className="modal-close-btn">
            <button className="p-1 absolute top-2.5 right-2.5 text-lg font-bold text-gray-400 hover:text-black hover:bg-gray-200 rounded transition cursor-pointer" onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="22px"
                viewBox="0 -960 960 960"
                width="22px"
                fill="CurrentColor"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

