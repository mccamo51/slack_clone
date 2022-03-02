
function MessageTab({ tabIcon, name }) {
  return (
    <div className="flex mt-0 items-center px-2 py-1 hover:bg-HeaderBG">
      <div className="opacity-70" style={{ color: "white" }}>
        {tabIcon}
        
      </div>
      <h4 className="text-white/80 ml-2 font-normal text-[14px]">{name}</h4>
    </div>
  );
}

export default MessageTab;
