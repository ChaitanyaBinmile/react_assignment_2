import { log_out, sliders,DashBoardItem } from "../index"

export const Session_IconComponent:React.FC=()=>{
    return (
        <div>
            <ul className="flex flex-col gap-[20px]">
                <DashBoardItem logo={sliders} text='Settings'></DashBoardItem>
                <DashBoardItem logo={log_out} text='Logout'></DashBoardItem>
            </ul>
            

        </div>
    )
}