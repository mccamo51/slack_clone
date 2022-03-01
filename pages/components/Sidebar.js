import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import SidebarPersonButton from './SidebarPersonButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CiCircleOutlined } from '@ant-design/icons/lib/icons';

function Sidebar() {
    return (
        <div className='flex bg-red-400 h-screen '>
            <div className='flex-[0.3] flex bg-black'>
                <div className='flex flex-[0.15] bg-leftSideBar border-r-[0.1px] border-r-slate-200/20 items-center flex-col border-t-[0.1px] border-t-slate-200/20'>
                    <SidebarPersonButton name="BA" selected={true} />
                    <SidebarPersonButton name="DA" selected={false} />
                    <IconButton className='text-white'>
                        +
                    </IconButton>

                </div>
                <div className='flex flex-[0.85] bg-leftSideBar'>
                    <div className='h-[60px] w-full bg-leftSideBar p-2 border-y-[0.1px] border-y-slate-200/20'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <div className='flex '>
                                    <h4 className='text-white font-bold'>
                                        Gitplus.
                                    </h4>
                                    <KeyboardArrowDownIcon style={{ color: 'white' }} />
                                </div>
                                <div className='flex items-center'>
                                    <CiCircleOutlined style={{ color: 'white' }} />
                                    <h3 className='text-white font-light ml-2'>
                                        Kelvin Ninson
                                    </h3>
                                </div>
                            </div>
                            <Avatar />

                        </div>
                    </div>

                </div>
            </div>
            <div className='flex-[0.7] flex bg-slate-600'>
                <div className='flex flex-[0.6] bg-white border-r-[0.1px] border-r-slate-200/40'>

                </div>
                <div className='flex flex-[0.4] bg-white'></div>
            </div>
        </div>
    )
}

export default Sidebar