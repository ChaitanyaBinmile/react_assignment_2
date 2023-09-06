import React, { useState } from "react";
import { favouriteType } from "./type";
import {Image} from "../../../assets"




export const FavouritesComponent: React.FC<favouriteType> = ({ like, size }) => {



  const [liked, setLike] = useState(like);
  const toggleLike = () => {
    setLike((prevLiked) => !prevLiked);
  };

  return (
    <div>

            <button onClick={toggleLike}>
                    <img className={size==='medium'?"h-[45px]":''} src={liked?Image.PURPLE:Image.WHITE} />
            </button>

    </div>
  );
};
