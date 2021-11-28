import React, {useState} from 'react';
import Sound from 'react-sound';
import soundfile from './f1Soundtrack.mp3';
import './playsound.css'


const PlaySound =(
) => {
    const[isPlaying, setIsPlaying] = useState(false);

    // content: '\25BA';
    return(
        <div className = "play-div">
            <button className="play" onClick={() => setIsPlaying(!isPlaying)}> {!isPlaying ? 'Play' : 'Stop'}
            </button>
            <Sound
                url={soundfile}
                playStatus={
                    isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                }
                playFromPosition={300}
                />
        </div>
    );
};

export default PlaySound;