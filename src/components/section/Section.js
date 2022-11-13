import React from 'react'
import './section.css';
import user from '../../Assets/user.png';
import asset from '../../Assets/Assets Traded.png';
import assets from '../../Assets/Assets Tradeable.png';
import p2p from '../../Assets/p2p.png'

const Section = () => {
  return (
    <div className='section-container'>
        <div className="section-numbers">
            <div className="users">
                <div className="userImage">
                <img src={user} alt="" />
                </div>
                <div className="user">
                    <h5>1.4M+</h5>
                    <p>Users</p>
                </div>
            </div>
            <div className="users">
               <div className="userImage">
               <img src={asset} alt="" />
               </div>
                <div className="user">
                    <h5>$1bn+</h5>
                    <p>Assets Traded</p>
                </div>
            </div>
            <div className="users">
                <div className="userImage">
                <img src={p2p} alt="" />
                </div>
                <div className="user">
                    <h5>$700m+</h5>
                    <p>P2P Transactions Done</p>
                </div>
            </div>
            <div className="users">
                <div className="userImage">
                <img src={assets} alt="" />
                </div>
                <div className="user">
                    <h5>75+</h5>
                    <p>Assets Tradeable</p>
                </div>
            </div>
        </div>
        <div className="section-two">
            <div className="section-offer">
              <button>WHAT WE OFFER</button>  
            </div>  
            <div className="section-power">
                <h3>Everything you need to power your crypto journey</h3>
                <p>From your first $1m, we are here to help with all the tools you need to grow on your journey.</p>
            </div>
        </div>
    </div>
  )
}

export default Section