import React from 'react';
import './App.css';

const App = () => {
    const {sounds} = require('./soundlist.js')

    const play = (file: string) => {
        console.log(`/sound/${file}`);
        const audio = new Audio(`/sound/${file}`);
        void audio.play();
    }

    return (
        <div className="App">
            {sounds.map((sound: any) => {
                const fileName = JSON.stringify(sound).replace(/"/g, "");
                return <button key={fileName} onClick={() => play(fileName)}>{fileName}</button>
            })}
        </div>

    );
}

export default App;
