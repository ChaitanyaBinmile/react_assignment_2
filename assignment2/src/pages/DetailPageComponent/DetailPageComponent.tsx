import { NavbarComponent,MovieDetailComponent,FavouritecardComponent } from './index';



export const DetailPageComponent: React.FC = () => {

   

    return (
        <div className="bg-black w-screen overflow-scroll">
            <div className="p-8">
            <NavbarComponent/>
            </div>
            <FavouritecardComponent/>

          <MovieDetailComponent/>

        </div>
    );
};