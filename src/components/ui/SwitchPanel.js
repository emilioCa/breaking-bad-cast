import React from 'react';

import bb from '../../img/logo.png';
import bcs from '../../img/bcs.png';

export const SwitchPanel = ({ setSerieShow }) => {

    const handleClick = (serie) => setSerieShow(serie)

    return (
        <section className="switch-panel">
            <img className="switch-img" src={bcs} onClick={() => handleClick('BCS')} />
            <img className="switch-img" src={bb} onClick={() => handleClick('BB')} />
        </section>
    )
}
