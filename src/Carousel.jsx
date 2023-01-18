// import { useState } from "react";

const Carousel =({images}) => {

    const active= 0;
    // console.log(images);

    return(
        <div className="carousel">
            <img src={images[active]} alt="animal hero" />
            <div className="carousel-smaller">
                {images.map((photo,index) => {
                    <img key={photo} src={photo} className={index == active ?"active" : ""} alt="animal thumbnail"/>
                })}
            </div>
        </div>
    )
}

export default Carousel;