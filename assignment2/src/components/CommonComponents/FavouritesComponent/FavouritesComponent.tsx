import React, { useState } from "react";
import { favouriteType } from "./type";
import { white,purple} from "../../../assets"




export const FavouritesComponent: React.FC<favouriteType> = ({ like, size }) => {



  const [liked, setLike] = useState(like);
  const toggleLike = () => {
    setLike((prevLiked) => !prevLiked);
  };

  return (
    <div>

            <button onClick={toggleLike}>
                    <img className={size==='medium'?"h-[45px]":''} src={liked?purple:white} />
            </button>

    </div>
  );
};
