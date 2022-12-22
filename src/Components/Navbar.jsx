import React from 'react';
import './Navbar.css';
import Ham from './../Components/Ham';
import insta from './../Assets/icons/insta.svg';
import linkedin from './../Assets/icons/linkedin.svg';
import twitter from './../Assets/icons/twitter.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { useRef } from 'react';


export default function Navbar(props) {
    let open = props.open;
    let setOpen = props.setOpen;
    let hideNavbar = !open ? 'hideNavbar' : '';

    return (
        <>
            <div className='Nbar d-flex align-items-center justify-content-between'>
                <AnimationOnScroll
                    animateOut='animate__fadeOutLeft' 
                    animateIn='animate__fadeInLeft'
                    initiallyVisible='true'
                    offset={100}
                >

                    <div className="logo">
                        RegimeOf<br />Hustlers
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll
                    animateOut='animate__fadeOutRight'
                    animateIn='animate__fadeInRight'
                    initiallyVisible='true'
                    offset={100}
                >

                    <Ham menuClicked={() => { setOpen(!open) }} isOpen={open} color='#fff' height={20} width={30} strokeWidth={2} />
                </AnimationOnScroll>

            </div>
            <div className={`NbarContent ${hideNavbar}`}>
                <div className="navItem">
                    <div className="num">
                        01
                    </div>
                    <div className="navItemName">
                        Our Value
                    </div>
                </div>
                <div className="navItem">
                    <div className="num">
                        02
                    </div>
                    <div className="navItemName">
                        Mission & Vision
                    </div>
                </div>
                <div className="navItem">
                    <div className="num">
                        03
                    </div>
                    <div className="navItemName">
                        Team
                    </div>
                </div>
                <div className="navItem">
                    <div className="num">
                        04
                    </div>
                    <div className="navItemName">
                        Our Story
                    </div>
                </div>
            </div>
            <div className={`${hideNavbar}`}>
                <div className="socials">
                    <img src={insta} alt="instagram" />
                    <img src={twitter} alt="twitter" />
                    <img src={linkedin} alt="linkedin" />
                </div>
            </div>
        </>


    );
}
