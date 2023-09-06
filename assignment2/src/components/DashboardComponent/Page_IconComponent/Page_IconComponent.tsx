import { NavLink } from "react-router-dom"
import { Image,DashBoardItem} from "../index"



export const Page_IconComponent:React.FC=()=>{
    return (
        <div>
            <ul className="flex flex-col gap-[20px]">
                <NavLink to='/Home' >
                    <DashBoardItem logo={Image.FILM} text='Home'></DashBoardItem>
                </NavLink>
                <NavLink to='/Favourite'>
                    <DashBoardItem logo={Image.HEART} text='Favourites'></DashBoardItem>
                </NavLink>
                <NavLink to='/Trending'>
                    <DashBoardItem logo={Image.TRENDING_UP} text='Trending'></DashBoardItem>
                </NavLink>
                <NavLink to='/Calender'>
                    <DashBoardItem logo={Image.CALENDERS} text='Coming soon'></DashBoardItem>
                </NavLink>
            </ul>
            

        </div>
    )
}