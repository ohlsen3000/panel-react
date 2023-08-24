import React from 'react';
import './App.css';

type SoundGroupProps = {
    soundFiles: string[]
    label: string
    prefix?: string
}

const SoundGroup = ({label, soundFiles, prefix}: SoundGroupProps) => {

    const play = (file: string) => {
        const audio = new Audio(`/sound/${file}`);
        void audio.play();
    }

    const filteredFiles = prefix ? soundFiles.filter(snd => snd.startsWith(prefix)) : soundFiles;

    return (
        <div className="soundGroup">
            <h2>{label}</h2>
            <div className="buttons">
                {filteredFiles.map((sound: string) => {
                    return <button key={sound} onClick={() => play(sound)}>
                        {sound.substring(prefix ? (prefix + '_').length : 0, sound.indexOf('.mp3')).replace(/_/g, " ")}
                    </button>
                })}
            </div>
        </div>
    );
}

const App = () => {
    const {sounds} = require('./soundlist.js');
    const soundFileNames: string[] = sounds.map((str: string) => str.replace(/"/g, ""));

    return (
        <div className="App">
            <SoundGroup soundFiles={soundFileNames} prefix={'fraller'} label={'Fraller'}/>
            <SoundGroup
                soundFiles={soundFileNames.filter(snd => !snd.startsWith('fantasy') &&
                                                         !snd.startsWith('fraller') &&
                                                         !snd.startsWith('long'))}
                label={'Shorts'}/>
            <SoundGroup soundFiles={soundFileNames} prefix={'fantasy'} label={'Fantasy'}/>
            <SoundGroup soundFiles={soundFileNames} prefix={'long'} label={'Soundteppich'}/>
        </div>

    );
}

export default App;
