import React from 'react';

import Button from '../button/button';

import './app-scene.css';

const AppScene = () => {
    return <div className="AppScene">
        <h1 className="AppScene-title">Mahjong game</h1>
        <div style={{ margin: '0 auto' }}><Button /></div>
    </div>;
}

export default AppScene;