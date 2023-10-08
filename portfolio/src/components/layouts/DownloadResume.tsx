import React from "react";
import { useTranslation } from "react-i18next";
import { IoDownload } from "react-icons/io5";

const DownloadResume = () => {
  const { t } = useTranslation();

  const downloadResume = () => {
    const url = "cv.pdf";
    window.open(url, "_blank");
  }

  return (
    <div
      className="bg-white rounded-full p-2 shadow-md focus:outline-none dark:hover:text-[#C778DD] hover:text-[#C778DD] transition duration-300 ease-in-out z-20 tooltip tooltip-right"
      data-tip={t("actionbar.downloadResume")}
      style={{ cursor: "pointer" }}
      onClick={downloadResume}
    >
      <IoDownload size={24} />
    </div>
  );
};

export default DownloadResume;
