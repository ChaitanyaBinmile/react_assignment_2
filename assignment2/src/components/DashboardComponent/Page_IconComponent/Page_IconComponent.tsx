import { NavLink } from "react-router-dom"
import { calender, film, heart, trending_up,DashBoardItem } from "../index"



export const Page_IconComponent:React.FC=()=>{
    return (
        <div>
            <ul className="flex flex-col gap-[20px]">
                <NavLink to='/Home' >
                    <DashBoardItem logo={film} text='Home'></DashBoardItem>
                </NavLink>
                <NavLink to='/Favourite'>
                    <DashBoardItem logo={heart} text='Favourites'></DashBoardItem>
                </NavLink>
                <NavLink to='/Trending'>
                    <DashBoardItem logo={trending_up} text='Trending'></DashBoardItem>
                </NavLink>
                <NavLink to='/Calender'>
                    <DashBoardItem logo={calender} text='Coming soon'></DashBoardItem>
                </NavLink>
            </ul>
            

        </div>
    )
}