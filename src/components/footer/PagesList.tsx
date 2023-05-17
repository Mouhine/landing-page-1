import React from "react";

const PagesList = () => {
  return (
    <div className="flex flex-col space-y-4 p-4 w-[200px]  ">
      <h2 className="text-2xl text-left w-full font-bold my-2 ">Pages</h2>
      <ul className="space-y-2 text-[#D4D4D4] text-[12px] ">
        <li>Style Guide</li>
        <li>404 Not Fond</li>
        <li>PasswordProtected</li>
        <li>Licences</li>
        <li>ChangeLog</li>
      </ul>
    </div>
  );
};

export default PagesList;
