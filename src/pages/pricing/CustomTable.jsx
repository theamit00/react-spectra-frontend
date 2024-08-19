import Icon from '@/components/Icon';
import React from 'react'
import { IoIosInformationCircle } from 'react-icons/io';
import { IoCheckmark, IoClose } from 'react-icons/io5';

const planType = ["free", "plus", "pro", "enterprise"];

const CustomTable = ({ tableData, className }) => {
  return (
    <div className={`w-full hidden flex-col gap-4  ${className}`}>
      <h5>{tableData.tableMainHeading}</h5>
      {tableData.tableRowData.map((row) => (
        <div className="grid grid-cols-12 border-b-[1.5px] border-lightGrey bg-white">
          <div className="col-span-4 py-8 ">
            <div className="flex items-center gap-2">
              <Icon className="w-6 h-6">
                <IoIosInformationCircle className="text-grey" />
              </Icon>
              <p className="sm-p font-spaceGrotesk text-black font-medium ">{row.rowHeading}</p>
            </div>
          </div>
          {planType.map((type) => (
            <p className="sm-p col-span-2 py-8">
              {row.rowData[type] === "false" || row.rowData[type] === "true" ? (
                row.rowData[type] === "false" ? (
                  <IoClose className="text-red-500 w-5 h-5 " />
                ) : (
                  <IoCheckmark className="text-green-500 w-5 h-5 " />
                )
              ) : (
                row.rowData[type]
              )}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CustomTable;