import React from 'react';
import './BuildControl.css'

function BuildControl(props) {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button className="Less">Less</button>
            <button className="More">More</button>
        </div>
    );
}

export default BuildControl;