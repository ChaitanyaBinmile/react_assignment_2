 
import { Image,DashBoardItem } from '../index';

export const Session_IconComponent:React.FC=()=>{
    return (
        <div>
            <ul className="flex flex-col gap-[20px]">
                <DashBoardItem logo={Image.SLIDERS} text='Settings'></DashBoardItem>
                <DashBoardItem logo={Image.LOG_OUT} text='Logout'></DashBoardItem>
            </ul>
            

        </div>
    );
};