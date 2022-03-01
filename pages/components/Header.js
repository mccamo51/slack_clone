import { FieldTimeOutlined, InfoCircleOutlined, SearchOutlined } from "@ant-design/icons/lib/icons";
import { Avatar, IconButton } from "@mui/material";
import React from "react";

function Header() {
  return <div className="w-fill bg-HeaderBG h-[40px] flex">
      <div className="flex-[0.99] flex justify-center ml-5">
      <IconButton>
          <FieldTimeOutlined style={{ color: "white" ,fontSize: "20px"}}/>
      </IconButton>
     <div className="w-1/3 bg-seachBG mr-4 ml-4  mt-[7px] mb-[7px]  rounded-lg flex justify-center items-center">
         {/* <SearchOutlined style={{ color: "white" ,fontSize: "13px"}}/> */}
     <input placeholder="🔍 Search slack theme" className="border-none px-2
      outline-none placeholder:text-slate-400 bg-seachBG
      placeholder:text-xs text-white placeholder:text-center text-center">
      </input>
     </div>
      <IconButton>
          <InfoCircleOutlined style={{ color: "white" ,fontSize: "20px"}}/>
      </IconButton>
      </div>
      <div className="flex flex[0.01] justify-end items-center">
          <Avatar 
          src="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg?w=400&h=300&c=crop"
          sx={{ width: 30, height: 30 }} />

      </div>
     
     
  </div>;
}

export default Header;
