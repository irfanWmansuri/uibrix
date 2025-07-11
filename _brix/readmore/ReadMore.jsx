'use client'

import { useState, useRef, useEffect } from "react";

export const ReadMore1 = ({
    collapsedHeight = 100,
    fadeOverlay = true,
    className = "",
}) => {
    const [expanded, setExpanded] = useState(false);
    const contentRef = useRef(null);

    const el = contentRef.current;
    useEffect(() => {
        if (el && el.scrollHeight > collapsedHeight) {
        }
    }, [collapsedHeight]);

    return (
        <div className={`relative max-w-2xl mx-auto h-auto bg-white shadow p-6 rounded-xl ${className}`}>
            <div ref={contentRef} className="overflow-hidden transition-all duration-500 ease-in-out relative"
                style={{ maxHeight: expanded ? el.scrollHeight : collapsedHeight }}
            >
                {/* your content */}
                <div className="space-y-2 text-gray-800">
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                        adipisci doloremque, fugiat temporibus labore voluptate iusto
                        assumenda facilis? Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <p className="text-sm">
                        Another paragraph here to test overflow. You can pass images, divs,
                        or any JSX children. Smooth expand/collapse will work.
                    </p>
                    <p className="text-sm">
                        Another paragraph here to test overflow. You can pass images, divs,
                        or any JSX children. Smooth expand/collapse will work.
                    </p>
                    <p className="text-sm">
                        Another paragraph here to test overflow. You can pass images, divs,
                        or any JSX children. Smooth expand/collapse will work.
                    </p>
                    <p className="text-sm">
                        Another paragraph here to test overflow. You can pass images, divs,
                        or any JSX children. Smooth expand/collapse will work.
                    </p>
                    <p className="text-sm">
                        Another paragraph here to test overflow. You can pass images, divs,
                        or any JSX children. Smooth expand/collapse will work.
                    </p>
                </div>

                {!expanded && fadeOverlay && (
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                )}
            </div>

            <div className="btnbox mt-3 flex justify-center relative before:absolute before:w-full before:h-[1px] before:bg-blue-200 before:left-0 before:top-1/2 before:z-20">
                <span className="px-2.5 z-20 bg-white">
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="bg-blue-600 hover:bg-blue-700 font-medium text-white text-sm cursor-pointer transition-all duration-300 ease-in-out pl-3 py-1 rounded-md flex items-center min-w-28"
                    >

                        {expanded ? "Read Less" : "Read More"}
                        <div className={`iconbox inline-block transition-all duration-300 ease-in-out transform  ${expanded ? 'rotate-180' : 'rotate-0'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor"><path d="M480-384 288-576h384L480-384Z" /></svg>
                        </div>
                    </button>
                </span>
            </div>
        </div >
    );
}


export const ReadMore2 = ({ className = '' }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`relative max-w-2xl mx-auto bg-white shadow p-6 rounded-xl ${className}`}>
      <div className={`${!expanded ? 'line-clamp-4 overflow-hidden' : ''} text-gray-800 text-sm space-y-2`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          adipisci doloremque, fugiat temporibus labore voluptate iusto
          assumenda facilis? Lorem ipsum dolor sit amet consectetur.
        </p>
        <p>
          Another paragraph here to test overflow. You can pass images, divs,
          or any JSX children. Smooth expand/collapse will work.
        </p>
        <p>
          Another paragraph here to test overflow. You can pass images, divs,
          or any JSX children. Smooth expand/collapse will work.
        </p>
        <p>
          Another paragraph here to test overflow. You can pass images, divs,
          or any JSX children. Smooth expand/collapse will work.
        </p>
        <p>
          Another paragraph here to test overflow. You can pass images, divs,
          or any JSX children. Smooth expand/collapse will work.
        </p>
        <p>
          Another paragraph here to test overflow. You can pass images, divs,
          or any JSX children. Smooth expand/collapse will work.
        </p>
        <p>
          Another paragraph here to test overflow. You can pass images, divs,
          or any JSX children. Smooth expand/collapse will work.
        </p>
      </div>

      {/* Toggle Button */}
      <div className="mt-4 flex justify-end relative before:absolute before:w-full before:h-[1px] before:bg-blue-200 before:left-0 before:top-1/2 before:z-10">
        <span className="pl-2.5 z-20 bg-white">
          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out pl-3 py-1 rounded-md flex items-center min-w-28"
          >
            {expanded ? 'Read Less' : 'Read More'}
            <span className={`ml-2 transition-transform duration-300 ${expanded ? 'rotate-180' : 'rotate-0'}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="currentColor"
              >
                <path d="M480-384 288-576h384L480-384Z" />
              </svg>
            </span>
          </button>
        </span>
      </div>
    </div>
  );
}



