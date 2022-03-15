import React from 'react';

const Player = ({ rotate, nextValue, winsX, winsO, ties, active }) => {
    return (
        <>
            {active && <div className={`${rotate ? 'rotate-active-background' : 'active-background'}`}></div>}
            <div className={`player ${rotate && 'rotate'}`}>
                <div className="players-info">
                    <div className="status">{active ? 'Your' : `${nextValue}'s`} turn!</div>
                    <div className="score">
                        <h1>Score:</h1>
                        <p>Wins <b>{active && nextValue !== 'O' ? 'You' : 'X'}</b>: {winsX}</p>
                        <p>Wins <b>{active  && nextValue !== 'X' ? 'You' : 'O'}</b>: {winsO}</p>
                        <p>Draws: {ties}</p>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Player;