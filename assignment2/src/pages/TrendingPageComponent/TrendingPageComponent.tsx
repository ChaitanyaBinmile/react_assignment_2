import { NavbarComponent,MovieDetailComponent,TrendingcardComponent } from "./index"



export const TrendingPageComponent: React.FC = () => {

   

    return (
        <div className="bg-black w-screen overflow-scroll">
            <div className="p-8">
            <NavbarComponent/>
            </div>
            <TrendingcardComponent/>

          <MovieDetailComponent/>

        </div>
    )
}