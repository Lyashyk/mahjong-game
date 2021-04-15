import React, { useState } from 'react';
import cn from 'classnames';

import './button.css';

const Button = ({ title }) => {
    const [isVisite, setIsVisite] = useState(false);

    return <button className={cn(
        "Button", {
        'Button--visite': isVisite
    }
    )} onClick={() => { setIsVisite(true) }}>{title}</button>
}

export default Button;