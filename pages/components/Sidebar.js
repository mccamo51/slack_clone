import { Avatar, IconButton } from "@mui/material";
import SidebarPersonButton from "./SidebarPersonButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MessageTab from "./MessageTab";
import { Message } from "@mui/icons-material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React, { useState } from "react";
import MessageTab2 from "./messageTab2";

// import ImageLogo from "../components/logo.png";

function Sidebar() {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div className="flex bg-red-400 h-screen ">
      <div className="flex-[0.25] flex bg-black">
        <div className="flex flex-[0.15] bg-leftSideBar border-r-[0.1px] border-r-slate-200/20 items-center flex-col border-t-[0.1px] border-t-slate-200/20">
          <SidebarPersonButton name="BA" selected={true} />
          <SidebarPersonButton name="DA" selected={false} />
          <IconButton className="text-white">+</IconButton>
        </div>
        <div className="flex flex-[0.85] bg-leftSideBar">
          <div
            className="h-[50px] w-full bg-leftSideBar border-y-[0.1px]
          cursor-pointer border-y-slate-200/20 items-center "
          >
            <div className="flex justify-between items-center hover:bg-HeaderBG">
              <div className="p-3 flex w-full  items-center justify-between ">
                <div>
                  <div className="flex">
                    <h4 className="text-white font-extrabold text-[20px] mr-1">
                      Payswitch
                    </h4>
                    <KeyboardArrowDownIcon
                      className="mt-2"
                      style={{ color: "white", fontSize: "17px" }}
                    />
                  </div>
                </div>
                <img
                  className="p-[10px] bg-white rounded-full h-[30px] w-[30px]"
                  src="/logo.png"
                ></img>
              </div>
            </div>
            <div className="mt-3">
              <MessageTab
                tabIcon={<Message fontSize="small" />}
                name="Threads"
              />
              <MessageTab
                tabIcon={<AlternateEmailIcon fontSize="small" />}
                name="Mentions & Reactions"
              />
              <MessageTab
                tabIcon={<CropSquareIcon fontSize="small" />}
                name="Slack Connect"
              />
              <MessageTab
                tabIcon={<MoreVertIcon fontSize="small" />}
                name="More"
              />
              <div className="mt-3"></div>
              <MessageTab2
                iconTab={
                  <MoreVertIcon fontSize="small" style={{ color: "white" }} />
                }
                name="Channels"
              />
              <MessageTab2
                iconTab={
                  <MoreVertIcon fontSize="small" style={{ color: "white" }} />
                }
                name="Direct messages"
              />
              <MessageTab2
                iconTab={
                  <MoreVertIcon fontSize="small" style={{ color: "white" }} />
                }
                name="Apps"
              />
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
