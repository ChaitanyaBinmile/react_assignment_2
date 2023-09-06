import { Image,DashBoardItem } from "../index"

export const Social_IconComponent:React.FC=()=>{
    return (
        <div>
            <ul className="flex flex-col gap-[20px]">
                <DashBoardItem logo={Image.USERS} text='Community'></DashBoardItem>
                <DashBoardItem logo={Image.MESSAGE_CIRCLE} text='Social'></DashBoardItem>
            </ul>
            

        </div>
    )
}