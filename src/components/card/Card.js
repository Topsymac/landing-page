import React from 'react';
import './card.css';
import walletPicture from '../../Assets/Lighting Jet.png';
import jetPicture from '../../Assets/Lighting Jet (1).png';
import kitePicture from '../../Assets/Lighting Jet (2).png';
import safePicture from '../../Assets/Lighting Jet (3).png';
import coinPicture from '../../Assets/Lighting Jet (4).png';
import logo from '../../Assets/Icon.png'
// import button from '../button/Button'
import chevron from '../../Assets/chevrons-right.png';
import arrow from'../../Assets/fi_chevrons-right.png';


const Card = () => {
  return (
    <div className="card-container">
        <div className="first-card">
            <div className="firstCard-wrapper">
                <div className="firstCard-left">
                    <h6>WALLET</h6>
                    <h3>Swift, Safe, Secured</h3>
                    <p>Never thought you could process crypto transactions with lightning and speed right? Well, welcome to Roqqu! It doesn't stop at that, you;</p>
                    <div className="grid">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Stay in control</p>
                           </div>
                        </div>
                        <div className="grid-item">
                        <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Have all the coins you need</p>
                           </div>
                        </div>
                        <div className="grid-item">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Experience solid rock security</p>
                           </div>
                        </div> 
                            
                        </div>
                        <div className="grid-item">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Enjoy zero withdrawal fees</p>
                           
                           </div>
                        </div>    
                        </div>
                        <div className="grid-item">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Enjoy zero deposit</p>
                           </div>
                        </div> 
                        </div>
                    </div>
                    <div className="firstCard-bottom">
                        <button>Get started <img src={arrow} alt="" /> </button>
                        <a href="learnMore">Learn more</a>
                        <img src={chevron} alt="" />
                    </div>
                </div>
                <div className="firstCard-right">
                    <img src={walletPicture} alt="" />
                </div>
            </div>
        </div>
        <div className="second-card">
        <div className="SecondCard-wrapper">
                <div className="firstCard-left">
                    <h6>WALLET</h6>
                    <h3>Swift, Safe, Secured</h3>
                    <p>Never thought you could process crypto transactions with lightning and speed right? Well, welcome to Roqqu! It doesn't stop at that, you;</p>
                    <div className="grid">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Stay in control</p>
                           </div>
                        </div>
                        <div className="grid-item">
                        <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Have all the coins you need</p>
                           </div>
                        </div>
                        <div className="grid-item">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Experience solid rock security</p>
                           </div>
                        </div> 
                            
                        </div>
                        <div className="grid-item">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Enjoy zero withdrawal fees</p>
                           
                           </div>
                        </div>    
                        </div>
                        <div className="grid-item">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Enjoy zero deposit</p>
                           </div>
                        </div> 
                        </div>
                    </div>
                    <div className="firstCard-bottom">
                        <button>Get started <img src={arrow} alt="" /> </button>
                        <a href="learnMore">Learn more</a> 
                        <img src={chevron} alt="" />
                    </div>
                </div>
                <div className="firstCard-right">
                    <img src={jetPicture} alt="" />
                </div>
            </div>
        </div>
        <div className="third-card">
        <div className="firstCard-wrapper">
                <div className="firstCard-left">
                    <h6>WALLET</h6>
                    <h3>Swift, Safe, Secured</h3>
                    <p>Never thought you could process crypto transactions with lightning and speed right? Well, welcome to Roqqu! It doesn't stop at that, you;</p>
                    <div className="grid">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Stay in control</p>
                           </div>
                        </div>
                        <div className="grid-item">
                        <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Have all the coins you need</p>
                           </div>
                        </div>
                        <div className="grid-item">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Experience solid rock security</p>
                           </div>
                        </div> 
                            
                        </div>
                        <div className="grid-item">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Enjoy zero withdrawal fees</p>
                           
                           </div>
                        </div>    
                        </div>
                        <div className="grid-item">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Enjoy zero deposit</p>
                           </div>
                        </div> 
                        </div>
                    </div>
                    <div className="firstCard-bottom">
                        <button>Get started <img src={arrow} alt="" /> </button>
                        <a href="learnMore">Learn more</a> 
                        <img src={chevron} alt="" />
                    </div>
                </div>
                <div className="firstCard-right">
                    <img src={kitePicture} alt="" />
                </div>
            </div>
        </div>
        <div className="fourth-card">
        <div className="fourthCard-wrapper">
                <div className="firstCard-left">
                    <h6>WALLET</h6>
                    <h3>Swift, Safe, Secured</h3>
                    <p>Never thought you could process crypto transactions with lightning and speed right? Well, welcome to Roqqu! It doesn't stop at that, you;</p>
                    <div className="grid">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Stay in control</p>
                           </div>
                        </div>
                        <div className="grid-item">
                        <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Have all the coins you need</p>
                           </div>
                        </div>
                        <div className="grid-item">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Experience solid rock security</p>
                           </div>
                        </div> 
                            
                        </div>
                        <div className="grid-item">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Enjoy zero withdrawal fees</p>
                           
                           </div>
                        </div>    
                        </div>
                        <div className="grid-item">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Enjoy zero deposit</p>
                           </div>
                        </div> 
                        </div>
                    </div>
                    <div className="firstCard-bottom">
                        <button>Get started <img src={arrow} alt="" /> </button>
                        <a href="learnMore">Learn more</a> 
                        <img src={chevron} alt="" />
                    </div>
                </div>
                <div className="firstCard-right">
                    <img src={safePicture} alt="" />
                </div>
            </div>
        </div>
        <div className="fifth-card">
        <div className="SecondCard-wrapper">
                <div className="firstCard-left">
                    <h6>WALLET</h6>
                    <h3>Swift, Safe, Secured</h3>
                    <p>Never thought you could process crypto transactions with lightning and speed right? Well, welcome to Roqqu! It doesn't stop at that, you;</p>
                    <div className="grid">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Stay in control</p>
                           </div>
                        </div>
                        <div className="grid-item">
                        <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Have all the coins you need</p>
                           </div>
                        </div>
                        <div className="grid-item">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Experience solid rock security</p>
                           </div>
                        </div> 
                            
                        </div>
                        <div className="grid-item">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Enjoy zero withdrawal fees</p>
                           
                           </div>
                        </div>    
                        </div>
                        <div className="grid-item">
                        <div className="grid-item">
                            <div className="grid-itemImage">
                            <img src={logo} alt="" />
                            </div>
                           <div className="grid-itemText">
                           <p>Enjoy zero deposit</p>
                           </div>
                        </div> 
                        </div>
                    </div>
                    <div className="firstCard-bottom">
                        <button>Get started <img src={arrow} alt="" /> </button>
                        <a href="learnMore">Learn more</a> 
                        <img src={chevron} alt="" />
                    </div>
                </div>
                <div className="firstCard-right">
                    <img src={coinPicture} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card