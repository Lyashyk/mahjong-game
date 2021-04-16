import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import { actions } from '../../reducer';

import './button.css';

const Button = ({ index, title, visited, comleted }) => {
    const [isDefaultHide, setIsDefaultHide] = useState(false);

    useEffect(() => {
        setTimeout(() => { setIsDefaultHide(true) }, 4000);
    }, [])

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(actions.buttonClick(index));
        setTimeout(() => { dispatch(actions.checkIsComplete(index, title)) }, 2500);
    }

    return <button className={cn(
        "Button", {
        'Button--visite': visited,
        'Button--hide': isDefaultHide && !visited && !comleted,
        'Button--completed': comleted,
    }
    )}
        onClick={() => { handleClick() }}
        disabled={!isDefaultHide || visited || comleted}>
        <span className="Button-title">{title}</span>
    </button>
}

export default Button;