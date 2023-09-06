
import { HomepageComponent,DetailPageComponent,TrendingPageComponent } from './index';
import { RouteType } from '../type';

export const RouterPath:RouteType={
    Home:{
        path: '/',
        Component: HomepageComponent
    },
    Favourites:{
        path: '/Favourite',
        Component: DetailPageComponent
    },
    Trending:{
        path: '/Trending',
        Component: TrendingPageComponent
    },
    Calender:{
        path: '/Calender',
        Component: TrendingPageComponent
    }

};