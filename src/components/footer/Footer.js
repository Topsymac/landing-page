import React from 'react'
import './footer.css';
import roqquLogo from "../../Assets/Logo-White.png";
import appstore from '../../Assets/Vector.svg';
import playstore from '../../Assets/Vector (1).svg';
import facebook from '../../Assets/Facebook.png';
import instagram from '../../Assets/Instagram.png';
import linkedin from '../../Assets/LinkedIn.png';
import twitter from '../../Assets/Twitter.png';
import arrow from '../../Assets/arrow-left.png';






const Footer = () => {
  return (
    <div className="footerContainer">
        <div className="storeLink">
            <div className="Appstore">
                <img src={appstore} alt="" />
            </div>
            <div className="Playstore">
                <img src={playstore} alt="" />
            </div>
        </div>
        <div className="footerRoqqu">
            <img src={roqquLogo} alt="" />
            <p>Enter your email to get notified by Roqqu for latest Updates.</p>
        </div>
        <div className="footerGrid">
            <div className="footerLeft">
                <div className="footerInput">
                <input type="text"placeholder='Email Address' />
                <img src={arrow} alt="" />

                </div>
                <div className="footerLinks">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>
            <div className="footerRight ">
                <div className="grid-container">
                    <div className="Grid-item">
                        <ul>
                        <h5>Product</h5>
                            <li>Wallet</li>
                            <li>Exchange</li>
                            <li>Loans</li>
                            <li>Virtual Card</li>
                            <li>Savings</li>
                        </ul>
                    </div>
                    <div className="Grid-item">
                        <ul>
                        <h5>Company</h5>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Legal</li>
                            </ul>
                        <ul>
                        <h5>Developers</h5>
                            <li>Overview</li>
                            <li>Integration</li>
                            <li>Technical Help</li>
                        </ul>
                    </div>
                    <div className="Grid-item">
                        <ul>
                        <h5>Resources</h5>
                            <li>Help Center</li>
                            <li>FAQs</li>
                            <li>Roqqu Hub</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="footerbottom">
            <div className="bottomLeft">
                <p> &copy; 2022 Roqqu Technologies Ltd. All rights reserved.</p>
            </div>
            <div className="bottomRight">
                <p>Roqqu is a fully regulated digital asset operator licensed in Lithuania by the Central Bank of Lithuania under Roqqu UAB Technologies with license number 305963619 operated legally accross 28 countries across Europe.</p>
                <p>Information about Roqqu's Crypto license can be found <a href="here">here</a></p>
            </div>
        </div>
    </div>
  )
}

export default Footer