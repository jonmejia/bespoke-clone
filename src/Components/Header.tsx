import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

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

            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faCartShopping} />

         </div>
     )
}
export default Header;