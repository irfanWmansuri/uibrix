'use client'
import { useState } from "react";

export const Button1 = () => {
  return (
    <button className="group p-[4px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
      <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-3 py-2">
        <div className="flex gap-2 items-center">
          <span className="font-semibold text-white">Get Started</span>
        </div>
      </div>
    </button>
  );
}

export const Button2 = () => {
  return (
    <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
      Button
    </button>
  );
}
export const Button3 = () => {
  return (
    <button disabled type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm px-6 py-3 text-center inline-flex items-center animate-pulse dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">
      <svg aria-hidden="true" role="status" className="inline w-5 h-5 mr-2 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
      </svg>
      Please wait..
    </button>
  );
}

export const Button4 = () => {
  return (
    <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
      <svg viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
      Github
    </button>
  )
}

export const Button5 = () => {
  return (
    <button className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group">
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56" />
      <span className="absolute bottom-0 left-0 h-full -ml-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-full opacity-100 object-stretch" viewBox="0 0 487 487">
          <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" />
        </svg>
      </span>
      <span className="absolute top-0 right-0 w-12 h-full -mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="object-cover w-full h-full" viewBox="0 0 487 487">
          <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" />
        </svg>
      </span>
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200" />
      <span className="relative text-base font-semibold">Hover Me !</span>
    </button>
  );
}

export const Button6 = () => {
  return (
    <button className="relative px-10 py-3.5 overflow-hidden group bg-gradient-to-r from-gray-700 to-black hover:bg-gradient-to-r hover:from-gray-600 hover:to-black text-white transition-all ease-out duration-300">
      <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease" />
      <span className="relative text-xl font-semibold">Text Button</span>
    </button>
  );
}

export const Button7 = () => {
  return (
    <div className="relative inline-block group">
      <button className="relative overflow-hidden px-8 py-4 border-2 border-[#2c9caf] text-[#2c9caf] font-bold uppercase tracking-widest text-sm rounded transition-all duration-1000 group-hover:text-white group-hover:scale-110 group-hover:border-[#70bdca] group-hover:shadow-[4px_5px_17px_-4px_#268391]">
        <span className="absolute top-0 left-[-50px] w-0 h-full bg-[#2c9caf] skew-x-[45deg] z-[-1] transition-all duration-1000 group-hover:w-[250%]"></span>
        Hover me
      </button>
    </div>
  );
};

export const Button8 = () => {
  return (
    <div>
      <button className="flex items-center px-5 py-2.5 rounded-full font-bold text-sm bg-lime-200 hover:bg-lime-300 border border-transparent transition-all active:scale-95">
        <span>Continue</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 74 74"
          height={34}
          width={34}
          className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-[5px]"
        >
          <circle strokeWidth={3} stroke="black" r="35.5" cy={37} cx={37} />
          <path
            fill="black"
            d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
          />
        </svg>
      </button>
    </div>
  );
};

export const Button9 = () => {
  return (
    <div className="w-[150px] h-[40px] relative group">
      <button
        type="button"
        className="w-full h-full flex items-center bg-[#3aa856] border border-[#34974d] overflow-hidden relative"
      >
        {/* Button Text */}
        <span className="text-white font-semibold transform transition-all duration-300 translate-x-[30px] group-hover:text-transparent">
          Add Item
        </span>

        {/* Button Icon */}
        <span className="absolute right-0 top-0 h-full w-[39px] bg-[#34974d] flex items-center justify-center transition-all duration-300 transform translate-x-[109px] group-hover:translate-x-0 group-hover:w-[148px] group-active:bg-[#2e8644]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="white"
            fill="none"
            className="w-[30px]"
          >
            <line x1={12} y1={5} x2={12} y2={19} />
            <line x1={5} y1={12} x2={19} y2={12} />
          </svg>
        </span>
      </button>
    </div>
  );
};

export const Button10 = () => {
  return (
    <div className="relative inline-block w-48 group">
      <button
        type="button"
        className="relative w-full h-12 flex items-center justify-start px-0 bg-transparent border-none outline-none cursor-pointer font-inherit"
        >
        {/* Animated Circle */}
        <span className="relative block w-12 h-12 bg-[#282936] rounded-full transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full">
          {/* Arrow Icon */}
          <span className="absolute top-1/2 left-2.5 transform -translate-y-1/2 w-4.5 h-0.5 bg-transparent transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:bg-white translate-x-0 group-hover:translate-x-4">
            <span className="absolute top-[-0.29rem] right-[0.0625rem] w-2.5 h-2.5 border-t-2 border-r-2 border-white transform rotate-45 content-['']"></span>
          </span>
        </span>

        {/* Button Text */}
        <span className="absolute top-0 left-0 right-0 bottom-0 ml-[1.85rem] py-3 text-center font-bold text-[#282936] uppercase leading-[1.6] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-white">
          Learn More
        </span>
      </button>
    </div>
  );
};

  export const Button11 = () => {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = () => {
      navigator.clipboard.writeText('Copied content');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
  
    return (
      <div className="relative w-9 h-9">
        <button
          onClick={handleCopy}
          className="group w-9 h-9 bg-[#353434] hover:bg-[#464646] text-[#ccc] hover:text-[#8bb9fe] rounded-[10px] flex items-center justify-center relative focus:outline-none focus-visible:ring focus-visible:ring-gray-400"
        >
          {/* Tooltip */}
          <span className="absolute z-10 top-[-2.2rem] left-1/2 -translate-x-1/2 whitespace-nowrap text-[12px] font-mono text-[#323232] bg-[#f4f3f3] px-2 py-1 rounded transition-all opacity-0 group-hover:opacity-100 pointer-events-none">
            {copied ? 'Copied!' : 'Copy to clipboard'}
            <span className="absolute w-2 h-2 bg-[#f4f3f3] rotate-45 bottom-[-4px] left-1/2 -translate-x-1/2 z-[-1]" />
          </span>
  
          {/* Clipboard Icon */}
          {!copied && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 6.35 6.35"
              height={20}
              width={20}
              className="absolute text-current"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
              />
            </svg>
          )}
  
          {/* Checkmark Icon */} 
          {copied && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height={18}
              width={18}
              className="absolute text-current"
            >
              <path
                fill="currentColor"
                d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
              />
            </svg>
          )}
        </button>
      </div>
    );
  };