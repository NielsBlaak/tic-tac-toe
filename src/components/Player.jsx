import React from 'react';

const Player = ({ rotate, nextValue, winsX, winsO, ties, active }) => {
    return (
        <>
            {active && <div className={`${rotate ? 'rotate-active-background' : 'active-background'}`}></div>}
            <div className={`player ${rotate && 'rotate'}`}>
                <div className="players-info">
                    <div className="score">
                        <div className="score-numbers">
                            <div><p><b>X</b><br /> {winsX}</p></div>
                            <div><p><b>O</b><br /> {winsO}</p></div>
                            <div><p><b>Draws</b><br /> {ties}</p></div>
                        </div>
                    </div>
                    <div className="status">{active ? 'Your' : `${nextValue}'s`} turn!</div> 
                </div>
            </div>
        </>
    );
}


export default Player;