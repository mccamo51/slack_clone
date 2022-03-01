import { Avatar, IconButton } from "@mui/material";
import React from "react";
import SidebarPersonButton from "./SidebarPersonButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// import ImageLogo from "../components/logo.png";

function Sidebar() {
  return (
    <div className="flex bg-red-400 h-screen ">
      <div className="flex-[0.25] flex bg-black">
        <div className="flex flex-[0.15] bg-leftSideBar border-r-[0.1px] border-r-slate-200/20 items-center flex-col border-t-[0.1px] border-t-slate-200/20">
          <SidebarPersonButton name="BA" selected={true} />
          <SidebarPersonButton name="DA" selected={false} />
          <IconButton className="text-white">+</IconButton>
        </div>
        <div className="flex flex-[0.85] bg-leftSideBar">
          <div className="h-[50px] w-full bg-leftSideBar p-2 border-y-[0.1px]
          cursor-pointer border-y-slate-200/20 items-center hover:bg-HeaderBG">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex ">
                  <h4 className="text-white font-extrabold text-[20px] mr-1">
                    Payswitch
                  </h4>
                  <KeyboardArrowDownIcon style={{ color: "white" }} />
                </div>
              </div>
              <img className="p-[10px] bg-white rounded-full h-[30px] w-[30px]" src="/logo.png"></img>
            </div>
            <div className="mt-3">

            </div>
          </div>
        </div>
      </div>
      <div className="flex-[0.85] flex bg-slate-600">
        <div className="flex flex-[0.6] bg-white border-r-[0.1px] border-r-slate-200/40"></div>
        <div className="flex flex-[0.4] bg-white"></div>
      </div>
    </div>
  );
}

export default Sidebar;
