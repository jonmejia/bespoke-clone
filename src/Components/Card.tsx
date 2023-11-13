import React from 'react';
import Image from 'next/image';

interface CardImageProps {
    altText: string,
    srcImg: string,
    itemName: string,
    color: string,
    price: number,
}

const Card: React.FC<CardImageProps> = ({altText,srcImg, itemName, color, price}):JSX.Element => {
     return(
         <div>
            <Image
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