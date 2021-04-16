import React from 'react';
import { useSelector } from 'react-redux';

import Button from '../button/button';

import { getArr } from '../../reducer';

import './grid.css';

const Grid = () => {

    const arr = useSelector(getArr);

    return <div className="Grid">
        {
            arr.map((item, index) => <div className="Grid-item" index={index}>
                <Button index={index} {...item} />
            </div>)
        }
    </div>;
}

export default Grid;