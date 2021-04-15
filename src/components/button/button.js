import React, { useState } from 'react';
import cn from 'classnames';

import './button.css';

const Button = () => {
    const [isVisite, setIsVisite] = useState(false);

    return <div style={{ margin: '0 auto', width: '32px' }}>
        <button className={cn(
            "Button", {
            'Button--visite': isVisite
        }
        )} onClick={() => { setIsVisite(true) }}>37</button>
    </div>
}

export default Button;