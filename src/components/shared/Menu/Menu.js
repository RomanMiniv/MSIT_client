import React from 'react';
import { slide as SlideMenu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo/logoWithoutText.svg';
import aboutIcon from '../../../assets/images/menu/about-us.svg';
import ITStartIcon from '../../../assets/images/menu/computer.png';
import photoshopIcon from '../../../assets/images/menu/photoshop.png';
import pythonIcon from '../../../assets/images/menu/python.png';
import webDevelopmentIcon from '../../../assets/images/menu/web-development.png';
import robotIcon from '../../../assets/images/menu/robot.png';
import internetMarketingIcon from '../../../assets/images/menu/online-marketing.png';

import './Menu.scss';

const Menu = () => {
    return (
        <SlideMenu
            right
            disableAutoFocus
            disableCloseOnEsc
        >
            <Link to="/"><img src={logo} />Головна</Link>
            <Link to="/about"><img src={aboutIcon} />Про нас</Link>
            <span className='sub-title'>Курси</span>
            <Link to="/course/IT-start"><img src={ITStartIcon} />IT start</Link>
            <Link to="/course/photoshop"><img src={photoshopIcon} />Photoshop</Link>
            <Link to="/course/python"><img src={pythonIcon} />Python</Link>
            <Link to="/course/web-development"><img src={webDevelopmentIcon} />Веб-розробка</Link>
            <Link to="/course/robotics"><img src={robotIcon} />Робототехніка</Link>
            <Link to="/course/internet-marketing"><img src={internetMarketingIcon} />Інтернет маркетинг</Link>
        </SlideMenu>
    );
}

export default Menu;
