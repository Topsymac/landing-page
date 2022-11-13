import React from 'react'
import './trade.css'
import phone from '../../Assets/Image.png';
import iconbox from '../../Assets/Iconbox.png';
import iconround from '../../Assets/Iconround.png';





const Trade = () => {
  return (
    <div className="trade-container">
        <div className="trade-wrapper">
            <div className="tradeLeft">
                <h2>Trade on the go.</h2>
                <h2>Anywhere, anytime.</h2>
                <p>Don't worry, we've got an app for every device.</p>
                <div className="tradeLeftLink">
                    <div className="tradeEasy">
                        <img src={iconbox} alt="" />
                        <p><b>Easy Access</b></p>
                        <p>Access and monitor funds at all times</p>
                    </div>
                    <div className="tradeAlways">
                        <img src={iconround} alt="" />
                        <p><b>Always in Sync</b></p>
                        <p>Don't worry about the data, always be in sync.</p>
                    </div>
                </div>
            </div>
            <div className="tradeRight">
                <img src={phone} alt="" className='phone' />
                
            </div>
        </div>
    </div>
  )
}

export default Trade