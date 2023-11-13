import React from 'react';
import Image from 'next/image';

const Header = ():JSX.Element => {
     return(
         <div>
            <Image
            src={'/next.svg'}
            height={25}
            width={25}
            alt={'logo'}/>

            <h1>BESPOKE POST</h1>
            <span>MEMBERSHIP</span>
            <span>|</span>
            <span>THE SHOP</span>

            <span>i</span>
            <span>i</span>
            <span>i</span>
         </div>
     )
}
export default Header;