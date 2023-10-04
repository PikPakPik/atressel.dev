import React from "react";
import { useTranslation } from "react-i18next";
import { IoDownload } from "react-icons/io5";

const DownloadResume = () => {
  const { t } = useTranslation()
  const handleDownload = () => {
    const pdfFilePath = process.env.PUBLIC_URL + "/assets/cv.pdf";

    const a = document.createElement("a");
    a.href = pdfFilePath;
    a.download = "resume.pdf";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div
      className="bg-white rounded-full p-2 shadow-md focus:outline-none dark:hover:text-[#C778DD] hover:text-[#C778DD] transition duration-300 ease-in-out z-20 tooltip tooltip-right"
      onClick={handleDownload}
      data-tip={t("actionbar.downloadResume")}
      style={{ cursor: "pointer" }}
    >
      <IoDownload size={24} />
    </div>
  );
};

export default DownloadResume;
