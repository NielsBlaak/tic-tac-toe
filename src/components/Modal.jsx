import React from 'react';

const Modal = ({ winner, open, restart }) => {
    if (!open) return null;

    return (
        <>
            <div id="backdrop" />
            <div className="modal">
                <div className="rotate">
                    <p className="winner">{winner ? `${winner} wins this round!` : `It's a draw!`}</p>
                    <button className="restart" onClick={restart}>Play again!</button>
                </div>
                <div>
                    <p className="winner">{winner ? `${winner} wins this round!` : `It's a draw!`}</p>
                    <button className="restart" onClick={restart}>Play again!</button>
                </div>
            </div>
        </>
    );
};

export default Modal;