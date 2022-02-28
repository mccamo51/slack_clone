import { IconButton } from '@mui/material';

function SidebarPersonButton({ name, selected }) {
    return (
        <div className= {selected && `border-[1px] w-[40px] h-[40px] border-white rounded-xl m-[5px] flex justify-center items-center`} >
            <IconButton>
                <div className='bg-red-600 w-[30px] h-[30px] rounded-lg flex justify-center items-center text-white font-bold cursor-pointer'>
                    <h4 className='text-sm'>
                        {name}
                    </h4>
                </div>
            </IconButton>
        </div>
    )
}

export default SidebarPersonButton