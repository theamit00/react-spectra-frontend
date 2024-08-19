import React from "react";
import CustomTable from "./CustomTable";
import { tablesData } from "./tableData";
import { SlideUp } from "@/components/animations";
import MobileViewCustomTable from "./MobileViewCustomTable";

const Tables = () => {
  return (
    <div className="flex flex-col gap-12 w-full ">
      {tablesData.map((tableData, index) => (
        <SlideUp delay={1}>
          <CustomTable
            key={index}
            tableData={tableData}
            className={`2md:flex`}
          />
          <MobileViewCustomTable
            key={index}
            tableData={tableData}
            className={`2md:hidden`}
          />
        </SlideUp>
      ))}
    </div>
  );
};

export default Tables;
