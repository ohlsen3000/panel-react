import React from 'react';
import './App.css';
import MuteIcon from './media/Mute_Icon.svg';

type SoundGroupProps = {
    soundFiles: string[]
    label: string
    prefix?: string
}

const SoundGroup = ({label, soundFiles, prefix}: SoundGroupProps) => {
    const [runningSounds, setRunningSounds] = React.useState<Array<HTMLAudioElement>>([]);

    const play = (file: string) => {
        const audio = new Audio(`/sound/${file}`);
        audio.addEventListener('ended', () => {
            setRunningSounds((prev) => prev.filter(snd => snd !== audio));
        });
        setRunningSounds([...runningSounds, audio]);
        void audio.play();
    }

    const silence = () => {
        runningSounds.forEach((audio: HTMLAudioElement) => {
            audio.pause();
            audio.remove();
        });
        setRunningSounds([]);
    }

    const filteredFiles = prefix ? soundFiles.filter(snd => snd.startsWith(prefix)) : soundFiles;

    return (
        <div className="soundGroup">
            <h2>{label}</h2>
            {runningSounds.length >
             0 &&
             <img src={MuteIcon} alt='Silence' title='Silence' onClick={silence} className={'mute-icon'}/>}
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
            <SoundGroup soundFiles={soundFileNames} prefix={'jerry'} label={'Jerry B. Anderson'}/>
            <SoundGroup soundFiles={soundFileNames} prefix={'abdi'} label={'Gilette Abdi'}/>
            <SoundGroup soundFiles={soundFileNames} prefix={'fmj'} label={'Full Metal Jacket'}/>
            <SoundGroup soundFiles={soundFileNames} prefix={'gutis'} label={'Gut\'is'}/>
            <SoundGroup
                soundFiles={soundFileNames.filter(snd => !snd.startsWith('fantasy') &&
                                                         !snd.startsWith('fraller') &&
                                                         !snd.startsWith('abdi') &&
                                                         !snd.startsWith('jerry') &&
                                                         !snd.startsWith('fmj') &&
                                                         !snd.startsWith('gutis') &&
                                                         !snd.startsWith('long'))}
                label={'Shorts'}/>
            <SoundGroup soundFiles={soundFileNames} prefix={'fantasy'} label={'Fantasy'}/>
            <SoundGroup soundFiles={soundFileNames} prefix={'long'} label={'Soundteppich'}/>
        </div>

    );
}

export default App;
