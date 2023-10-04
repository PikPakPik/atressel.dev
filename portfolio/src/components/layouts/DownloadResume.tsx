import React from "react";
import { IoDownload } from "react-icons/io5";

const DownloadResume = () => {
  const handleDownload = () => {
    // Replace 'resume.pdf' with the actual path to your PDF file in the assets folder.
    const pdfFilePath = process.env.PUBLIC_URL + "/assets/cv.pdf";

    // Create an anchor element and trigger a download.
    const a = document.createElement("a");
    a.href = pdfFilePath;
    a.download = "resume.pdf"; // You can change the download filename if needed.
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div
      className="bg-white rounded-full p-2 shadow-md focus:outline-none dark:hover:text-[#C778DD] hover:text-[#C778DD] transition duration-300 ease-in-out z-20"
      onClick={handleDownload}
      style={{ cursor: "pointer" }}
    >
      <IoDownload size={24} />
    </div>
  );
};

export default DownloadResume;
