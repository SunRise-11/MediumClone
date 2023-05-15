'use client'

import SellIcon from "@mui/icons-material/Sell";
import { tagImage } from "../../../../public/icons/icons";


const TagHeader = ({ tag } : { tag : String}) => {
  return (
    <div className="flex items-center space-x-4 mt-8">
      <div className="border bg-gray-200 p-2 rounded-full outline-none">
        {tagImage}
      </div>
      <h1 className="text-2xl font-semibold">{ tag }</h1>
    </div>
  );
};

export default TagHeader;