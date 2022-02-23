import { FieldTimeOutlined, InfoCircleOutlined, SearchOutlined } from "@ant-design/icons/lib/icons";
import { IconButton } from "@mui/material";
import React from "react";

function Header() {
  return <div className="w-fill bg-HeaderBG h-[40px] flex justify-center">
      <IconButton>
          <FieldTimeOutlined style={{ color: "white" ,fontSize: "20px"}}/>
      </IconButton>
     <div className="w-1/3 bg-seachBG mr-4 ml-4  mt-[7px] mb-[7px]  rounded-lg border-slate-700 border-[0.1px] flex justify-center items-center">
         {/* <SearchOutlined style={{ color: "white" ,fontSize: "13px"}}/> */}
     <input placeholder="🔍 Serach slack theme" className=" border-none px-2
      outline-none placeholder:text-slate-400 bg-seachBG
      placeholder:text-xs text-white placeholder:text-center text-center">
      </input>
     </div>
      <IconButton>
          <InfoCircleOutlined style={{ color: "white" ,fontSize: "20px"}}/>
      </IconButton>
     
  </div>;
}

export default Header;
