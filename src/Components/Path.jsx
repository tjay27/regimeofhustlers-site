import React from 'react';
import Textdiv from './Textdiv';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Path(props) {
    let { path, toHide } = props;
    const path1 = ['So, you too are, a Hustler.', 'Welcome aboard', 'You are worthy'];
    const path2 = ['You got potential, but still not one', 'Let us make you one', 'You have the will, you can be worthy'];

    let text = path === 'correct' ? path1 : path2;

    return (
        <>
            <AnimationOnScroll
                animateOut='animate_fadeOut'
                animationDuration={1}
                animateIn='animate__fadeIn'
                offset={100}
            >
                <Textdiv text={text[0]} size={15} color={'#D7263D'} toHide={toHide} marginT={0.1} />
            </AnimationOnScroll>
            <AnimationOnScroll
                animateOut='animate_fadeOut'
                animationDuration={1}
                animateIn='animate__fadeIn'
                offset={100}
            >
                <Textdiv text={text[1]} size={15} toHide={toHide} />
            </AnimationOnScroll>
            <AnimationOnScroll
                animateOut='animate_fadeOut'
                animationDuration={1}
                animateIn='animate__fadeIn'
                offset={100}
            >
                <Textdiv text='Hustlers here' toHide={toHide} />
            </AnimationOnScroll>
            <AnimationOnScroll
                animateOut='animate_fadeOut'
                animationDuration={1}
                animateIn='animate__fadeIn'
                offset={100}
            >
                <Textdiv text='Are different, We are, unconventional.' toHide={toHide} />
            </AnimationOnScroll>
            <AnimationOnScroll
                animateOut='animate_fadeOut'
                animationDuration={1}
                animateIn='animate__fadeIn'
                offset={100}
            >
                <Textdiv text='We make and break rules, as we see fit.' toHide={toHide} />
            </AnimationOnScroll>
            <AnimationOnScroll
                animateOut='animate_fadeOut'
                animationDuration={1}
                animateIn='animate__fadeIn'
                offset={100}
            >
                <Textdiv text={text[2]} size={15} color={'#D7263D'} toHide={toHide} />
            </AnimationOnScroll>
            <AnimationOnScroll
                animateOut='animate_fadeOut'
                animationDuration={1}
                animateIn='animate__fadeIn'
                offset={100}
            >
                <Textdiv text='Join Us.' toHide={toHide} />
            </AnimationOnScroll>
            <AnimationOnScroll
                animateOut='animate_fadeOut'
                animationDuration={1}
                animateIn='animate__fadeIn'
                offset={100}
            >
                <Textdiv text='We are the RegimeOfHustlers' size={20} toHide={toHide} marginB={10} />
            </AnimationOnScroll>
        </>
    )
}
