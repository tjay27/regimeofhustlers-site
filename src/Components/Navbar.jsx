import React from 'react';
import './Navbar.css';
import Ham from './../Components/Ham';
import insta from './../Assets/icons/insta.svg';
import linkedin from './../Assets/icons/linkedin.svg';
import twitter from './../Assets/icons/twitter.png';


export default function Navbar(props) {
    let open = props.open;
    let setOpen = props.setOpen;
    let hideNavbar = !open ? 'hideNavbar' : '';

    return (
        <>
            <div className='Nbar d-flex align-items-center justify-content-between'>
                <div className="logo">
                    RegimeOf<br />Hustlers
                </div>
                <Ham menuClicked={() => { setOpen(!open) }} isOpen={open} color='#fff' height={20} width={30} strokeWidth={2} />
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
