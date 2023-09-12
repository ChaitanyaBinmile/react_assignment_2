import React, { useState } from 'react';
import { Image } from './index';
import { FavouriteType } from '../FavouritesComponent/type';
import { useAppDispatch } from '../../../app/hooks';
import { setFav } from '../../../app/feature/likeSlice/likeSlice';

// interface ContextType {
//   favArr: MovieType[];
// }

// export const LikeContext = React.createContext<ContextType>({
//   favArr: MovieList,
// });

export const FavouritesArray: React.FC<FavouriteType> = ({ like, size, id }) => {
  const dispatch = useAppDispatch();
  // const [favourite, setFavourite] = useState<MovieType[]>(MovieList);
  const [liked, setLike] = useState(like);


  const toggleLike = (id: string) => {
    setLike((prevLiked) => !prevLiked);
    dispatch(setFav(id));
    };
  return (
    <div>
    
        <button onClick={() => toggleLike(id)}>
          <img className={size === 'medium' ? 'h-[45px]' : ''} src={liked ? Image.PURPLE : Image.WHITE  } />
        </button>
   
    </div>
  );
};
