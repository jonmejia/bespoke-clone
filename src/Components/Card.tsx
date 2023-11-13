import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
interface CardImageProps {
    altText: string,
    displayImage: string,
    hoverImage: string
    itemName: string,
    color: string,
    price: number,
}

const Card: React.FC<CardImageProps> = ({altText,displayImage,hoverImage, itemName, color, price}):JSX.Element => {
    const [srcImg, setSrcImg] = useState(displayImage)
     return(
         <div>
            <Image
            onMouseEnter={()=>setSrcImg(hoverImage)}
            onMouseLeave={()=>setSrcImg(displayImage)}
            src={srcImg}
            height={25}
            width={25}
            alt={altText}/>
            <div>{itemName}</div>
            <p>{color}</p>
            <p>${price}</p>
         </div>
     )
}
export default Card;