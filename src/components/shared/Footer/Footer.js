import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { createMatrix } from '../../../helpers/createMatrix';

import { showModalWindow } from '../ModalWindow/ModalWindow';
import Map from '../Map/Map';

import logo from '../../../assets/images/logo/logoWithoutText.svg';
import facebookIcon from '../../../assets/images/footer/facebook.svg';
import instagramIcon from '../../../assets/images/footer/instagram.svg';
import telegramIcon from '../../../assets/images/footer/telegram.svg';

import './Footer.scss';

const Footer = ({ aboutAnimationImageRef }) => {
    const [general, setGeneral] = useState();
    const footerRef = useRef(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/general`)
            .then(response => response.json())
            .then(data => {
                data.list_items.sort((a, b) => a.sequence_number - b.sequence_number);
                data.table_items.sort((a, b) => a.sequence_number - b.sequence_number);

                data.list_items = createMatrix(data.list_items, 2);
                data.table_items = createMatrix(data.table_items, 3);

                setGeneral(data);
            });
    }, []);

    useEffect(() => {
        if (aboutAnimationImageRef && footerRef) {
            document.addEventListener('scroll', toggleFooterByScroll);

            return () => {
                document.removeEventListener('scroll', toggleFooterByScroll);
            }
        }
    }, [aboutAnimationImageRef, footerRef]);

    const toggleFooterByScroll = () => {
        const documentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        footerRef.current.style.opacity =
            documentScrollTop > aboutAnimationImageRef.current.height ? 1 : 0;
    }

    return (
        <footer ref={footerRef}>
            <Link to='/'>
                <img src={logo} className='logo' />
            </Link>
            <div className='contacts'>
                {
                    general && (
                        <div className='contact-info'>
                            <div>
                                {/* To Do: investigate 'rel' attribute */}
                                <a href={general.facebook} target={'_blank'} rel='noopener noreferrer'><img className='icon' src={facebookIcon} /></a>
                                <a href={general.instagram} target={'_blank'} rel='noopener noreferrer'><img className='icon' src={instagramIcon} /></a>
                                <a href={general.telegram} target={'_blank'} rel='noopener noreferrer'><img className='icon' src={telegramIcon} /></a>
                            </div>
                            <p className='telephones'>
                                {general.phone_number_1}<br />
                                {general.phone_number_2}
                            </p>
                        </div>
                    )
                }
                <span
                    className='map'
                    // To Do: investigate performance (optimize rendering)
                    onClick={() => showModalWindow(
                        <Map
                            googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
                            loadingElement={<div style={{ height: '100%' }} />}
                            containerElement={<div style={{ height: '100%' }} />}
                            mapElement={<div style={{ height: '100%' }} />}
                        />,
                        {
                            width: '100%',
                            height: '60vh',
                            background: 'silver'
                        }
                    )}
                >Як добратись</span>
            </div>
        </footer>
    );
}

export default Footer;
