import React from 'react'
import './Footer.css';
import fb from './images/icon-facebook.svg'
import pint from './images/icon-pinterest.svg'
import ig from './images/icon-instagram.svg'

function Footer() {
    return (
        <div className="footer" >
            <div className="image">
                <img src={fb} alt="fb" />
            </div>
            <div className="image">
                <img src={pint} alt="pint" />
            </div>
            <div className="image">
                <img src={ig} alt="ig" />
            </div>
        </div>

    )
}

export default Footer
