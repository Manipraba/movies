import React from 'react';

import './footer.scss';
import './imdb';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">Movies Authority</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of services</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Pravacy policy</Link>
                    </div>
                    <div className="footer__content__menu">
                        <a href='https://www.imdb.com/best-of/?ref_=nv_sr_srsg_0'>You Must Watch</a>
                        <a href='https://www.koimoi.com/released-movies/' > Recent release</a> 
                        <a href='https://www.imdb.com/best-of/?ref_=nv_sr_srsg_0'>Top IMDB</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
