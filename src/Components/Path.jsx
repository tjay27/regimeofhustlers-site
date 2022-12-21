import React from 'react';
import Textdiv from './Textdiv';

export default function Path(props) {
    let { path, toHide } = props;
    const path1 = ['So, you too are, a Hustler.', 'Welcome aboard', 'You are worthy'];
    const path2 = ['You got potential, but still not one', 'Let us make you one', 'You have the will, you can be worthy'];

    let text = path === 'correct' ? path1 : path2;

    return (
        <>
            <Textdiv text={text[0]} size={15} color={'#D7263D'} toHide={toHide} />
            <Textdiv text={text[1]} size={15} toHide={toHide} />
            <Textdiv text='Hustlers here' toHide={toHide} />
            <Textdiv text='Are different, We are, unconventional.' toHide={toHide} />
            <Textdiv text='We make and break rules, as we see fit.' toHide={toHide} />
            <Textdiv text={text[2]} size={15} color={'#D7263D'} toHide={toHide} />
            <Textdiv text='Join Us.' toHide={toHide} />
            <Textdiv text='We are the RegimeOfHustlers' size={20} toHide={toHide} />
        </>
    )
}
