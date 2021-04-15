import React from 'react';

import Button from '../button/button';

import './grid.css';

const Grid = () => {
    const _arr = [];

    for (let i = 0; i < 30; i++) {
        _arr.push(i);
    }

    return <div className="Grid">
        {
            _arr.map((item, index) => <div className="Grid-item" index={index}>
                <Button title={item} />
            </div>)
        }
    </div>;
}

export default Grid;