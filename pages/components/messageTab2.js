import { IconButton } from "@mui/material";
import { Add, ArrowRightAltOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function MessageTab2({ iconTab, name }) {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex mt-0 items-center px-1 py-1 justify-between !max-h-8"
    >
      <div className="flex items-center justify-between">
        <div className="opacity-70" style={{ color: "white" }}>
          <ArrowRightIcon />
        </div>
        <h4 className="text-white/80 ml-2 font-normal text-[14px]">{name}</h4>
      </div>
      {isHovering ? (
        <div className="flex items-center ">
          <div className="flex h-[25px] w-[25px] rounded-md hover:bg-HeaderBG justify-center items-center mr-2">
            {iconTab}
          </div>
          <IconButton className="h-[25px]">
            <Add fontSize="small" style={{ color: "white" }} />
          </IconButton>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default MessageTab2;
