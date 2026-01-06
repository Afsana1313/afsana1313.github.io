import React from "react";

const DownloadCv = () => {
  return (
    <a
      href="/Afsana_Zaman_Nipa_full_stack_dev.pdf"
      download="Afsana_Zaman_Nipa_CV.pdf"
    >
      <button className="cursor-pointer mt-2 flex flex-row items-center px-5 py-2 bg-gray-700 backdrop-blur-md text-white rounded-[32px] hover:bg-gray-600 transition">
        <img
          src="/download-thick.svg"
          alt="download icon"
          className="w-4 h-4 mr-2 text-white invert"
        />
        Download CV
      </button>
    </a>
  );
};

export default DownloadCv;
