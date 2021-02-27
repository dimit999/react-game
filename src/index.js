import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.css';
import App from './App';
import initAudioPlayer from './soundButtons';

ReactDOM.render(<App />, document.getElementById('root'));
initAudioPlayer();

