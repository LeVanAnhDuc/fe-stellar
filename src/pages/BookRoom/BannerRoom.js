import "bootstrap/dist/css/bootstrap.min.css";

import style from './BookRoom.module.scss';
//import banner2 from './DeluxeDouble2.jpg';
import React from 'react';
function BannerRoom(image){
    return(
        <React.Fragment>
          <img className={(style.imageRoom)} src={image} alt="introRoom" />
        </React.Fragment>
    );
}
export default BannerRoom;