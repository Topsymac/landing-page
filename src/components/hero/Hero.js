import React from 'react';
import './hero.css';
import heroImage from '../../Assets/hero-screenshot.png';
// import heroImage from '../../Assets/Browser.png';
import bitcoin from '../../Assets/bitcoin.png';
import ethereum from'../../Assets/eth.png';
import usdt from '../../Assets/tether.png';
import litecoin from '../../Assets/litecoin.png';
import xrp from '../../Assets/xrp.png';
import arrow from'../../Assets/fi_chevrons-right.png';



const Hero = () => {
  return (
    <div className='Hero-wrapper'>
        <div className="Hero-container">
          <div className="hero-news">
            <span>News</span> <button>News goes here and can be this long only</button> 
          </div>
          <div className="hero-newstoo">
            <span>News</span> <button>News goes here <img src={arrow} alt="" /></button> 
          </div>
          <div className="hero-cryptocurrency">
            <h1>75+ cryptocurrencies at your fingertips on Roqqu</h1>
            <p>Buying & Selling cryptocurrency is made safe and easy with Roqqu.</p>
            <p>Start your Roqqu journey now!</p>
          </div>
          <div className="hero-input">
            <input type="text" placeholder='Your email address'>
            </input> <span><button>Get started <img src={arrow} alt="" /></button></span>
          </div>
          <div className="hero-download">
            <p>Press <span>D</span> Download our app! Dive into the Roqqu world!</p>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="" />
          </div>
        </div>
        <div className="hero-bottom">
          <div className="marketPrices">
            <div className="Markets">
              <p>Market Prices</p>
            </div>
            <div className="Market">
              <div className="marketImage">
              <img src={bitcoin} alt="" />
              </div>
              <p>BTC = N14,174,852 </p>
              <p className='rate'>+2.31%</p>
            </div>
            <div className="Market">
            <div className="marketImage">
              <img src={ethereum} alt="" />
              </div>
              <p>ETH = N966,727</p>
              <p className='rateRed'>-0.74%</p>
            </div>
            <div className="Market">
            <div className="marketImage">
              <img src={usdt} alt="" />
              </div>
              <p>USDT = N726</p>
              <p className='rateRed'>-0.00%</p>
            </div>
            <div className="Market">
            <div className="marketImage">
              <img src={litecoin} alt="" />
              </div>
              <p>LTC = N38,897</p>
              <p className='rate'>+2.31%</p>
            </div>
            <div className="Market">
            <div className="marketImage">
              <img src={xrp} alt="" />
              </div>
              <p>XRP = N313</p>
              <p className='rateRed'>-1.64%</p>
            </div>
            <div className="Market">
            <div className="marketImage">
              <img src={bitcoin} alt="" />
              </div>
              <p>DOGE = N44 </p>
              <p className='rate'>+0.51%</p>
            </div>
          </div>

        </div>
    </div>
    
  )
}

export default Hero