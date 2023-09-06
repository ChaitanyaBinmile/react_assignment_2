import { IconComponent,Page_IconComponent,Session_IconComponent,Social_IconComponent } from './index';


export const DashboardComponent:React.FC=()=>{
    return (
        <div className="hidden min-h-[565px] overflow-y-scroll flex-col bg-[#21201E] 
        p-[30px] w-[20vw] min-w-[200px] h-screen 
        justify-between shadow-drawerShadow sticky z-10 top-0 left-0 md:flex ">
           <div>
            <IconComponent/>
           </div>
           <div>
            <Page_IconComponent/>
           </div>
           <div>
            <Social_IconComponent/>
           </div>
           <div>
            <Session_IconComponent/>
           </div>
        </div>
    );
};