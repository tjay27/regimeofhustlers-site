import React from "react";

export default function Textdiv(props){
    let {text, size, color} = props;
    let style={
        fontSize: (size||15)+'vmin',
        color: color || 'white',
        textAlign: 'center'
    }
    return (
        <div className="h-100 d-flex justify-content-center align-items-center" style={style}>{text}</div>
    );
}
