import React from 'react'
import './hub.css';
import image from '../../Assets/img (2).png';
import chevron from '../../Assets/chevrons-right.png';

const Hub = () => {
    return ( 
        <div className = "hub-container" > 
            <div className = "hubHeading" >
                <h1>Roqqu Hub</h1> 
                <div className = "headingLink" >
                    <a href = "roqquhub"> Go to Hub </a> 
                </div> 
            </div> 
            <div className = "hubText" >
                <p> We present to you the no .1 stop
                for everything crypto and blockchain.You 're guaranteed to get the best out of the entire blockchain space with over 100+ learning materials o the Roqqu hub.</p> 
            </div> 
            <div className = "hubLinks" >
                <a href ='all' className ='active'>All</a> 
                <a href ='trading'>Trading</a> 
                <a href ='crypto'>Cryptocurrency</a> 
                <a href ='blockchain'>Blockchain</a> 
                <a href ='defi'>Defi</a> 
            </div> 
            <div className ="hubCardWrapper">
                <div className ="hubCardOne">
                    <div className ="hubCardImage">
                        <img src = {image} alt = ""/>
                    </div> 
                    <div className = "hubCardText" >
                        <a href = "Finance" className = 'finance' > FINANCE </a> 
                        <h2> Volatility and Crypto Volatility </h2> 
                        <p> Volatility is a measure of how much an asset 's price has flunctuated upwards or downwards over time...</p> 
                        <div className = "hubcardRead" >
                            <a href = "read" > Read More </a> 
                            <img src={chevron} alt="" />
                        </div> 
                    </div>
                </div> 
                <div className = "hubCardOne" >
                    <div className = "hubCardImage" >
                        <img src = {image} alt = "" />
                    </div> 
                    <div className = "hubCardText" >
                        <a href = "Finance" className ='finance'>FINANCE</a> 
                        <h2> Volatility and Crypto Volatility </h2> 
                        <p> Volatility is a measure of how much an asset 's price has flunctuated upwards or downwards over time...</p> 
                        <div className ="hubcardRead">
                            <a href = "read" > Read More </a> 
                            <img src={chevron} alt=""/>
                        </div> 
                    </div> 
                </div> 
                <div className = "hubCardOne" >
                    <div className = "hubCardImage" >
                        <img src = {image} alt = "" />
                    </div> 
                    <div className = "hubCardText" >
                        <a href = "Finance" className = 'finance' > FINANCE </a> 
                        <h2 > Volatility and Crypto Volatility </h2> 
                        <p> Volatility is a measure of how much an asset 's price has flunctuated upwards or downwards over time...</p> 
                        <div className = "hubcardRead" >
                            <a href = "read" > Read More </a>
                            <img src={chevron} alt="" /> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div>
    )
}

export default Hub