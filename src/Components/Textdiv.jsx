import React from "react";

export default function Textdiv(props){
    let {text, size, color, toHide} = props;
    let style={
        fontSize: (size||15)+'vmin',
        color: color || 'white',
        textAlign: 'center',
        display: toHide ? 'none' : 'flex'
    }
    return (
        <div className='textDiv' style={style}>{text}</div>
    );
}
