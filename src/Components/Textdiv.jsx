import React from "react";

export default function Textdiv(props) {
    let { text, size, color, toHide, marginB} = props;
    let style = {
        fontSize: (size || 15) + 'vmin',
        color: color || 'white',
        textAlign: 'center',
        display: toHide ? 'none' : 'flex',
        marginBottom: (marginB || 25)+ '%',
    }
    return (
        <div className='textDiv' style={style}>{text}</div>


    );
}
