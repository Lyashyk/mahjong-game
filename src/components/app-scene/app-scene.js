import React from 'react';

import Grid from '../grid/grid';

import './app-scene.css';

const AppScene = () => <div className="AppScene">
    <h1 className="AppScene-title">Mahjong game</h1>
    <div className="AppScene-grid"><Grid /></div>
</div>

export default AppScene;