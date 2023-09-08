 
import { Route,Routes } from 'react-router-dom';
import { HomepageComponent,RouterPath} from '../index';


export const RouteProvider: React.FC = () => {
    return(
        <div>
            <Routes>
        <Route {...RouterPath.Home} />
        <Route path='Home' Component={HomepageComponent} />
        <Route {...RouterPath.Favourites}/>
        <Route {...RouterPath.Trending} />
        <Route {...RouterPath.Calender} />

      </Routes>
            
        </div>
    );
};