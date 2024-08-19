import Icon from "@/components/Icon";
import React from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { IoCheckmark, IoClose } from "react-icons/io5";

const planType = ["free", "plus", "pro", "enterprise"];

const MobileViewCustomTable = ({ tableData, className }) => {
  return (
    <div className={`w-full flex flex-col gap-4 ${className}`}>
      <h5>{tableData.tableMainHeading}</h5>
      {tableData.tableRowData.map((row) => (
        <div className="grid grid-cols-12 gap-6 pb-4 bg-white">
          <div className="col-span-12 p-[8px_16px] border-[1.5px] border-black rounded-[8px] sm-box-shadow bg-cream ">
            <div className="flex items-center gap-2">
              <Icon className="w-6 h-6">
                <IoIosInformationCircle className="text-grey" />
              </Icon>
              <p className="sm-p font-spaceGrotesk text-black font-medium">
                {row.rowHeading}
              </p>
            </div>
          </div>
          {planType.map((type) => (
            <p className="sm-p col-span-12 grid grid-cols-2 px-4 gap-4">
              <span className="capitalize text-black font-bold ">{type}</span>
              <span>
                {row.rowData[type] === "false" ||
                row.rowData[type] === "true" ? (
                  row.rowData[type] === "false" ? (
                    <IoClose className="text-red-500 w-5 h-5 " />
                  ) : (
                    <IoCheckmark className="text-green-500 w-5 h-5 " />
                  )
                ) : (
                  row.rowData[type]
                )}
              </span>
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MobileViewCustomTable;
