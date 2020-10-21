import React from 'react';

import bb from '../../img/logo.png';
import bcs from '../../img/bcs.png';

const Header = ({ serieShow }) => {
    return (
        <header className='center'>
            {
                (serieShow === 'BB') ?
                    (
                        <img src={bb} alt='' />
                    ) :
                    (
                        <img src={bcs} alt='' />
                    )
            }
        </header>
    )
}

export default Header;