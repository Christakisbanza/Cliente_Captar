import React from 'react'
import './Home.css'

import imgCaptarHome from '../img/Captar.png'
import imgIos from '../img/apple_btn.png'
import imgAndroid from '../img/gplay_btn.png'

const Home = () => {
    return (
        <div className='home'>
            <div className='imgCaptarHome'>
                <img src={imgCaptarHome} alt="img Captar Home" />
            </div>
            <div className='img-baixar'>
                <img src={imgAndroid} alt="android" />
                <img src={imgIos} alt="Ios" />
            </div>
        </div>
    )
}

export default Home