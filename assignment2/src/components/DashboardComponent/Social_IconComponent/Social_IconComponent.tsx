import { message_circle, users,DashBoardItem } from "../index"

export const Social_IconComponent:React.FC=()=>{
    return (
        <div>
            <ul className="flex flex-col gap-[20px]">
                <DashBoardItem logo={users} text='Community'></DashBoardItem>
                <DashBoardItem logo={message_circle} text='Social'></DashBoardItem>
            </ul>
            

        </div>
    )
}